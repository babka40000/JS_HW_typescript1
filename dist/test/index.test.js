"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("../ts/movie");
var index_1 = require("../index");
test('create object', function () {
    var movie = new movie_1.default(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    expect(movie).toBeInstanceOf(movie_1.default);
});
test('add movie to cart', function () {
    var movie = new movie_1.default(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    var cart = new index_1.default();
    cart.add(movie);
    expect(cart.items[0]).toEqual(movie);
});
test('sum cart', function () {
    var movie = new movie_1.default(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    var cart = new index_1.default();
    cart.add(movie);
    cart.add(movie);
    expect(cart.sum()).toEqual(2000);
});
test('sum cart discount', function () {
    var movie = new movie_1.default(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    var cart = new index_1.default();
    cart.add(movie);
    cart.add(movie);
    expect(cart.sumDiscount(10)).toBeCloseTo(1800);
});
test('delete item from cart', function () {
    var movie1 = new movie_1.default(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    var movie2 = new movie_1.default(12, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
    var cart = new index_1.default();
    cart.add(movie1);
    cart.add(movie1);
    cart.deleteItem(11);
    expect(cart.items.length).toEqual(1);
});
//# sourceMappingURL=index.test.js.map