export class ShopItem {
    name: string;
    desc: string;
    quantity: number;
    price: number;
    tax: number;
    sku: number;
    currency: string;
}

export class ShoppingCart {
    public items: ShopItem[] = new Array<ShopItem>();
    public itemsTotal = 0;

    public updateFrom(src: ShoppingCart) {
        this.items = src.items;
        this.itemsTotal = src.itemsTotal;
    }
}
