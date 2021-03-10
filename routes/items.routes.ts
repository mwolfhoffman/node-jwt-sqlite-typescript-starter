import itemsController from '../controllers/items.controller';
import * as express from 'express';
const router = express.Router()

router.get("/", itemsController.getAllItems);
router.post("/", itemsController.createItem);
router.put("/", itemsController.updateItem);
router.delete("/:id", itemsController.deleteItem)
router.get("/:id", itemsController.getItemById)


export default router