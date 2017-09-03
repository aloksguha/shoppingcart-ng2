export class Product {
    public id: string;
    public imgpath: string;
    public name: string;
    public price: number;
    public quantity: number;
    public type: string;

    constructor(
        id: string,
        imgpath: string,
        name: string,
        price: number,
        quantity: number,
        type: string
    ) {
        this.id = id || '';
        this.imgpath = imgpath || '';
        this.name = name || '';
        this.price = price || 0;
        this.quantity = quantity || 0;
        this.type = type || '';
    }
} 