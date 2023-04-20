"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.sum = function () {
        return this._items.reduce(function (x, y) { return x + y.price; }, 0);
    };
    Cart.prototype.sumDiscount = function (discount) {
        return this._items.reduce(function (x, y) { return x + y.price * (100 - discount) / 100; }, 0);
    };
    Cart.prototype.deleteItem = function (id) {
        for (var i = 0; i <= this._items.length - 1; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
            }
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=index.js.map