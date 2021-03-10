import repo from '../repositories/item.repository';
import { Request, Response } from 'express'
import Item from '../models/item';

export default class {
    static async getAllItems(req: Request, res: Response, next: Function) {
        let items = await repo.getAllItems();
        return res.send({ items });
    };

    static async getItemById(req: Request, res: Response, next: Function) {
        let item = await repo.getItemById(req.params.id)
        if(!item){
            return res.status(404).send(item);
        }
        return res.send({ item });
    }

    static async createItem(req: Request, res: Response, next: Function) {
        if (!req.body.name || !req.body.price) {
            const err: Error = new Error("Item name and price are required.");
            return next(err)
        }
        const newItem = new Item(req.body.name, req.body.price);
        const success = await repo.createItem(newItem);
        return res.send({ success, item: newItem });
    }

    static async updateItem(req: Request, res: Response, next: Function) {
        if (!req.body.id || !req.body.name || !req.body.price) {
            const err: Error = new Error("Item id, name and price are required.");
            return next(err)
        }
        let success = await repo.updateItem(req.body);
        return res.send({ success, item: req.body });
    }


    static async deleteItem(req: Request, res: Response, next: Function) {
        if (!req.params.id) {
            const err: Error = new Error("Item id is required.");
            return next(err)
        }
        let deleted = await repo.deleteItem(Number(req.params.itemId));
        return res.send({ success: deleted });
    }



}