import {Page, NavController} from 'ionic/ionic';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

/*
  Generated class for the CartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/cart/cart.html',
})
export class CartPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}

@Injectable()
export class Cart {
  cartItems$: Observable<Array<any>>;
  private _cartObserver: any;
  private _products: Array<any>;
  
  constructor() {
    this.cartItems$ = new Observable(observer => {
      this._cartObserver = observer;
    });
    
    this._products = [];
  }
  
  add(product) {
    this._products.push(product);
    console.log(this._products);
    this._cartObserver.next(this._products);
  }
}