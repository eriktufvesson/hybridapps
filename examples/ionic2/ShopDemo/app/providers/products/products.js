import {Injectable} from 'angular2/core';

/*
  Generated class for the Products provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Products {
  constructor() {
    this.products = [{
      id: 1,
      name: 'Product 1',
      description: 'The first product',
      imageUrl: 'img/sample_images/products/1.jpeg',
      price: 123,
      stock: 10,
      sale: true,
      originalPrice: 199
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'The first product',
      imageUrl: 'img/sample_images/products/2.jpeg',
      price: 123,
      stock: 10,
      sale: true,
      originalPrice: 199
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'The first product',
      imageUrl: 'img/sample_images/products/3.jpeg',
      price: 123,
      stock: 10,
      sale: true,
      originalPrice: 199
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'The first product',
      imageUrl: 'img/sample_images/products/4.jpeg',
      price: 123,
      stock: 10,
      sale: true,
      originalPrice: 199
    }];
  }
}

