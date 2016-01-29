import {Page, NavController, NavParams, Modal} from 'ionic/ionic';
import {Cart} from '../cart/cartService';
import {Navbar} from '../../components/navbar/navbar';
import {AddToCartModal} from '../cart/cart';

@Page({
  templateUrl: 'build/pages/product/product.html',
  directives: [Navbar]
})
export class ProductPage {
  constructor(nav: NavController, params: NavParams, cart: Cart) {
    this.nav = nav;
    this.params = params;
    this.cart = cart;
    
    this.product = params.get("product");
  }
  
  addToCart(product) {
    //this.cart.add(product);
    let addToCartModal = Modal.create(AddToCartModal);
    addToCartModal.onDismiss(data => {
      console.log(data);
    });
    this.nav.present(addToCartModal, { product: product }); 
  }
}
