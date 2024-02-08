import sharp from 'sharp';
import { gradient } from '../constant/gradient.js';
import { registerFont, createCanvas, loadImage } from 'canvas';

const generateAvatarWithLetter = (name, background, font_color) => {
  const canvas = createCanvas(64, 64);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `#${background}`;
  ctx.fillRect(0, 0, 64, 64);

  ctx.font = `24px OpenSans`;
  ctx.fillStyle = `#${font_color}`;

  const textWidth = ctx.measureText(name).width;
  const textHeight = 16;

  const x = (64 - textWidth) / 2;
  const y = (64 + textHeight) / 2;

  ctx.fillText(name, x, y);

  const buffer = canvas.toBuffer();
  return buffer;
};

const generateAvatarWithGradient = (index, format) => {
  let randomGradient;
  if (
    index !== undefined &&
    index !== null &&
    index >= 0 &&
    index < gradient.length
  ) {
    randomGradient = gradient[index];
  } else {
    randomGradient = gradient[Math.floor(Math.random() * gradient.length)];
  }

  const stops = randomGradient.gradient.map((item) => {
    return `<stop offset="${item.pos}%" stop-color="${item.color}" />`;
  });

  const img = sharp({
    create: {
      width: 80,
      height: 80,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  img.composite([
    {
      input: Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          ${stops.join('')}
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </svg>`,
      ),
    },
  ]);
  img.toFormat(format);
  return img;
};

export { generateAvatarWithLetter, generateAvatarWithGradient };
