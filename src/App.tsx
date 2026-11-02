import { lazy, Suspense, useCallback, useState, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider } from './hooks/smoothScroll';
import OpeningSequence from './components/OpeningSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Overlays are only needed on demand — split them out of the first load.
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

// One clear, unified series order presenting all of Vatsal's work
const ORDER: SectionId[] = ['about', 'originals', 'journey', 'picks', 'skills', 'moments', 'story'];

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const [stage, setStage] = useState<'home' | 'opening'>('home');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const closeIntro = useCallback(() => setPlaying(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  const sections: Record<SectionId, ReactNode> = {
    about: <About />,
    originals: <Originals onOpen={setProject} />,
    journey: <Seasons />,
    picks: <TopPicks />,
    skills: <Skills />,
    moments: <Achievements />,
    story: <ResumeSection onView={() => setResumeOpen(true)} />,
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />

      <AnimatePresence>
        {stage === 'opening' && <OpeningSequence key="opening" onDone={() => setStage('home')} />}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: EASE }}>
        <Navbar order={ORDER} />
        <main>
          <Hero onPlay={() => setPlaying(true)} />
          <ContinueWatching order={ORDER} />
          {ORDER.map((id) => (
            <Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
              {sections[id]}
            </Scene>
          ))}
          <FinalCTA onReplay={() => setStage('opening')} />
        </main>
      </motion.div>

      <Suspense fallback={null}>
        <AnimatePresence>{playing && <PlayIntro key="intro" onClose={closeIntro} />}</AnimatePresence>
        <AnimatePresence>{project && <ProjectModal key="project" project={project} onClose={closeProject} onSwitch={setProject} />}</AnimatePresence>
        <AnimatePresence>{resumeOpen && <ResumeModal key="resume" onClose={closeResume} />}</AnimatePresence>
      </Suspense>
    </LayoutGroup>
  );
}
