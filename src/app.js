import express from 'express';
import avaterRouter from './routes/v1/avatar.route.js';

const app = express();

// Middlewares

// Routes

app.use('/v1', avaterRouter);

export default app;
