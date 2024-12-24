import mongoose from 'mongoose';
import { Server } from 'node:http';
import app from './app';
import config from './config';

let server: Server;

const bootstrap = async () => {
  await mongoose.connect(config.database_url as string);

  server = app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

const shutdown = async () => {
  await mongoose.disconnect();
  server.close();
};

bootstrap();
