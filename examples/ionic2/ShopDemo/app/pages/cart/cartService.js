import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

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
  
  getProducts() {
    return this._products;
  }
  
  add(product) {
    this._products.push(product);
    console.log(this._products);
    this._cartObserver.next(this._products);
  }
}