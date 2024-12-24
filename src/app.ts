import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

const middlewares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
  morgan('dev'),
];
app.use(middlewares);

/** Application routes */

// handle not found route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    errorMessages: [{ path: req.originalUrl, message: 'Route not found' }],
  });
  next();
});

export default app;
