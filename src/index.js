import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

app.on('error', (err) => {
  console.error('Server error:', err);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
