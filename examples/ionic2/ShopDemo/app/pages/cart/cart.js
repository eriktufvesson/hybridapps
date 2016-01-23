import {Page, NavController} from 'ionic/ionic';
import {NgFor} from 'angular2/common';
import {Cart} from './cartService';

/*
  Generated class for the CartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/cart/cart.html',
  directives: [NgFor]
})
export class CartPage {
  constructor(nav: NavController, cart: Cart) {
    this.nav = nav;
    this.cartItems = cart.getProducts();
    
    cart.cartItems$.subscribe((products) => {
      this.cartItems = products;
    });
  }
} 