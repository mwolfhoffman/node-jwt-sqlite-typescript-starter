import express from 'express';
import bodyParser from 'body-parser';
import dao from './repositories/dao';
import { authenticated, authMiddleware } from './controllers/auth.controller';
import authRoutes from './routes/auth.routes';
import itemsRoutes from './routes/items.routes';
import swaggerUi from "swagger-ui-express";

const port = 3000;
export const app = express();

app.listen(port, () => console.log(`Authentication example app listening on port ${port}!`));
app.use(bodyParser.json());
app.use(authMiddleware);

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );



//  Drop/Create DB Tables:
dao.setupDbForDev();

app.use('/api/auth', authRoutes);
app.use('/api/items', authenticated, itemsRoutes);