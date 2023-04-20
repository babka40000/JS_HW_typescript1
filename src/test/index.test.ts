import Movie from '../ts/movie';
import Cart from '../index';

test('create object', () => {
  const movie = new Movie(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  expect(movie).toBeInstanceOf(Movie);  
});

test('add movie to cart', () => {
  const movie = new Movie(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  const cart = new Cart();
  cart.add(movie);

  expect(cart.items[0]).toEqual(movie);
});

test('sum cart', () => {
  const movie = new Movie(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  const cart = new Cart();

  cart.add(movie);
  cart.add(movie);

  expect(cart.sum()).toEqual(2000);
});

test('sum cart discount', () => {
  const movie = new Movie(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  const cart = new Cart();

  cart.add(movie);
  cart.add(movie);

  expect(cart.sumDiscount(10)).toBeCloseTo(1800);
});

test('delete item from cart', () => {
  const movie1 = new Movie(11, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  const movie2 = new Movie(12, "Марсианин", 2005, "США", "Возможно все", "Фантастика", 124, 1000);
  const cart = new Cart();

  cart.add(movie1);
  cart.add(movie1);

  cart.deleteItem(11);

  expect(cart.items.length).toEqual(1);
});
