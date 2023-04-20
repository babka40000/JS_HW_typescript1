import Buyable from "./buyable";

export default class Movie implements Buyable{
  readonly id: number;
  readonly name: string;
  readonly year: number;
  readonly country: string;
  readonly tagline: string;
  readonly genre: string;
  readonly duration: number;
  readonly price: number;
  
  constructor(id: number, name: string, year: number, country: string, tagline: string, genre: string, duration: number, price: number) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.duration = duration;
    this.price = price;
  }
}