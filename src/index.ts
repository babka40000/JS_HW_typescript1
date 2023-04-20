import Buyable from "./ts/buyable"

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    return this._items.reduce((x, y) => x + y.price, 0);
  }

  sumDiscount(discount: number): number {
    return this._items.reduce((x, y) => x + y.price * (100 - discount) / 100, 0);
  }

  deleteItem(id: number): void {
    for (let i=0; i <= this._items.length - 1; i++) {
      if (this._items[i].id === id) {
        this._items.splice(i, 1);
      }
    }
  }
}

