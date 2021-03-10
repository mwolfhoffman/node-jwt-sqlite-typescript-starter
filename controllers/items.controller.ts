import { Controller, Get, Route } from "tsoa";
import repo from '../repositories/item.repository';

@Route("items")
export default class ItemController extends Controller{
    @Get("/")
    public static async getAllItems(req, res) {
        let items = await repo.getAllItems();
        return res.send({ items });
    };

    static async getItemById(req, res) {
        let item = await repo.getItemById(req.params.id)
        return res.send({ item });
    }

}