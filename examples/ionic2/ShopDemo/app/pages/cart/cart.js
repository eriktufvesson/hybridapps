import {Page, NavController} from 'ionic/ionic';
import {Injectable, EventEmitter} from 'angular2/core';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/share';

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
  //products: Array<string>;
  //_cartObserver: any;
  //_products: Array<any>;
  _broadcaster: EventEmitter = new EventEmitter();
  rxEmitter: any;
  
  constructor() {
    //this.products = [];
    //this.broadcaster = broadcaster;
    //this._cartObserver = null;
    //this.products = Observable(observer => {
    //  this._cartObserver = observer;
    //}).share();
    this.rxEmitter = this._broadcaster;
    
    this._products = [];
  }
  
  getEmitter() {
    return this._broadcaster;
  }
  
  add(product) {
    // return Observable.create(observer => {
    //   this._products.push(product);
    //   console.log(this._products);
    //   observer.next(this._products);
    // });
    this._products.push(product);
    console.log(this._products);
    this.rxEmitter.emit(this._products);
  }
}