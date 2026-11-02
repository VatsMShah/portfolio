import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

for (const w of [1100, 720, 420]) {
  await sharp('pic.png')
    .resize({ width: w })
    .webp({ quality: 95, alphaQuality: 100 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp('pic.png').resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">VATSAL</text>
        <text x="78" y="360" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="20" fill="#ff3d5a" letter-spacing="6">AI ENGINEER • FULL-STACK DEVELOPER</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('images built successfully');
