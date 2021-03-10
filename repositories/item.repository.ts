import dao from './dao';
import Item from '../models/item';

export default class {

    static async getAllItems(): Promise<Item[]> {
        const items = await dao.all("SELECT * FROM items", [])
        return <Item[]>items
    }

    static async getItemById(id: string): Promise<Item> {
        const item = await dao.get("SELECT * FROM items WHERE id = ?", [id])
        return <Item>item;
    }
}
