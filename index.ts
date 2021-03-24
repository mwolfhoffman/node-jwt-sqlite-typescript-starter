import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dao from './repositories/dao';
import { authenticated, authMiddleware } from './controllers/auth.controller';
import authRoutes from './routes/auth.routes';
import itemsRoutes from './routes/items.routes';

const port = 3000;
export const app = express();

app.listen(port, () => console.log(`Authentication example app listening on port ${port}!`));
app.use(express.json())
app.use(authMiddleware);


//  Script to setup sqlite DB in memory //
dao.setupDbForDev();
////////////////////////////////////

app.use('/api/auth', authRoutes);
app.use('/api/items', authenticated, itemsRoutes);