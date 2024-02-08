import {
  generateAvatarWithLetter,
  generateAvatarWithGradient,
} from '../utils/avatar.js';

const getNamedAvatar = async (req, res) => {
  const {
    name,
    background_color = 'fff',
    font_color = '000',
    is_uppercase = 'true',
    is_bold = 'false',
    format = 'png',
  } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  let firstLetter = name.charAt(0);
  if (is_uppercase === 'true') {
    firstLetter = firstLetter.toUpperCase();
  } else {
    firstLetter = firstLetter.toLowerCase();
  }
  const img = generateAvatarWithLetter(
    firstLetter,
    background_color,
    font_color,
    is_bold,
    format,
  );
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': img.length,
  });
  res.end(img);
};

const getGradientAvatar = async (req, res) => {
  const { index, format = 'png' } = req.query;

  const img = generateAvatarWithGradient(Number(index), format);
  res.setHeader('Content-Type', `image/${format}`);
  return img.pipe(res);
};

export { getNamedAvatar, getGradientAvatar };
