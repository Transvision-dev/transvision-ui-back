import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// Database
import Connect from './src/database/Connect';

import UserController from './src/controllers/userController';
import uploadController from './src/controllers/uploadController';

//For env File 
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

Connect();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
  res.json({ message: 'Welcome to Express & TypeScript Server' });
});

app.use('/api/users', UserController);
app.use('/api/', uploadController);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});