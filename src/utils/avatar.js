import sharp from 'sharp';
import { gradient } from '../constant/gradient.js';

const generateAvatarWithLetter = (name, background, font, bold, format) => {
  const img = sharp({
    create: {
      width: 64,
      height: 64,
      channels: 4,
      background: `#${background}`,
    },
  });

  img.composite([
    {
      input: Buffer.from(
        `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <text x="40%" y="60%" font-family="Arial" font-size="24" font-weight='${
                  bold === 'true' ? 700 : 500
                }' fill='#${font}'>${name}</text>
              </svg>`,
      ),
    },
  ]);
  img.toFormat(format);
  return img;
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
