
export default class {
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    id!: number;
    name!: string;
    price!: number;
}