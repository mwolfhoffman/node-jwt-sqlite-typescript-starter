import { Request, Response } from 'express'
import ItemController from '../controllers/items.controller';
import ItemRepo from '../repositories/item.repository';

let req, res, next;

describe('ItemController', () => {

    it("Create Item throws error if no name in request body", () => {

        req = {
            body: {
                price: 12
            }
        };
        res = {
            send: jest.fn()
        };
        next = jest.fn();

        ItemController.createItem(req, res, next);
        expect(res.send).toHaveBeenCalledTimes(0);
        expect(next).toHaveBeenCalledTimes(1);

    });
});
