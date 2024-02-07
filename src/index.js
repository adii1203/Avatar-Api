import app from './app.js';

app.on('error', (err) => {
  console.error('Server error:', err);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
