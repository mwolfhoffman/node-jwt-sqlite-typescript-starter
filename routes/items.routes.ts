import itemsController from '../controllers/items.controller';
import * as express from 'express';
const router = express.Router()

router.get("/", itemsController.getAllItems);
router.get("/:id", itemsController.getItemById)

export default router