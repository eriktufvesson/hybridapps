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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/1.jpeg',
      price: 123,
      stock: 10,
      sale: true,
      originalPrice: 199,
      popular: true
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/2.jpeg',
      price: 99,
      stock: 0,
      sale: true,
      originalPrice: 199,
      popular: false
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/3.jpeg',
      price: 20,
      stock: 99,
      sale: true,
      originalPrice: 30,
      popular: true
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/4.jpeg',
      price: 100,
      stock: 5,
      sale: false,
      originalPrice: 100,
      popular: true
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/5.jpeg',
      price: 20,
      stock: 99,
      sale: true,
      originalPrice: 30,
      popular: false
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dolor vitae sapien dictum, eget efficitur eros molestie. Duis vulputate magna quis nisi feugiat tristique. Aenean quis odio eget ante tristique volutpat et non magna. Donec vitae accumsan sapien. Nam in elementum justo, eu consectetur libero',
      imageUrl: 'img/sample_images/products/6.jpeg',
      price: 100,
      stock: 5,
      sale: false,
      originalPrice: 100,
      popular: true
    }];
  }
}

