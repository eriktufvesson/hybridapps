import {Page, NavController, NavParams, ViewController} from 'ionic/ionic';
import {Cart} from './cartService';
import {CheckoutPage} from '../checkout/checkout';
import {ProductPage} from '../product/product';

@Page({
  templateUrl: 'build/pages/cart/cart.html'
})
export class CartPage {
  constructor(nav: NavController, cart: Cart) {
    this.nav = nav;
    this.cartItems = cart.getProducts() || [];
    this.cart = cart;
        
    cart.cartItems$.subscribe((products) => {
      console.log(products);
      this.cartItems = products;
    });
  }
  
  calcTotal() {
    let total = 0;
    this.cartItems.forEach((product) => {
      total += product.price;
    });
    return total;
  }
  
  remove(product) {
    this.cart.remove(product);
  }
  
  clearCart() {
    this.cart.clear();
    this.nav.popToRoot();
  }
  
  navCheckout() {
    this.nav.push(CheckoutPage);
  }
  
  navProduct(product) {
    this.nav.push(ProductPage, {
      product: product
    });
  }
} 

@Page({
  templateUrl: 'build/pages/cart/add-to-cart.html'
})
export class AddToCartModal {
  constructor(viewCtrl: ViewController, navParams: NavParams, cart: Cart) {
    this.viewCtrl = viewCtrl;
    this.product = navParams.get('product');
    this.cart = cart;
  }
  
  addToCart() {
    this.cart.add(this.product);
    this.viewCtrl.dismiss();
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
    
}