import repo from '../repositories/item.repository';

export default class {
    static async getAllItems(req, res) {
        let items = await repo.getAllItems();
        return res.send({ items });
    };

    static async getItemById(req, res) {
        let item = await repo.getItemById(req.params.id)
        return res.send({ item });
    }

}