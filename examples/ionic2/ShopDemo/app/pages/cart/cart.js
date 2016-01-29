import {Page, NavController, NavParams, ViewController} from 'ionic/ionic';
import {Cart} from './cartService';

/*
  Generated class for the CartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/cart/cart.html'
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

@Page({
  templateUrl: 'build/pages/cart/add-to-cart.html'
})
export class AddToCartModal {
  constructor(viewCtrl: ViewController, navParams: NavParams) {
    this.viewCtrl = viewCtrl;
    this.product = navParams.get('product');
  }
  
  dismiss() {
    let data = { 'test': 'test2' };
    this.viewCtrl.dismiss(data);
  }
}