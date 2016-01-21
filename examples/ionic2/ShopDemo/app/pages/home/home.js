import {Page, NavController} from 'ionic/ionic';
import {ListPage} from '../list/list';
import {GridPage} from '../grid/grid';
import {Navbar} from '../../components/navbar/navbar';
import {Cart} from '../../pages/cart/cart';
import {Products} from '../../providers/products/products';
import {NgFor} from 'angular2/common';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [Navbar, NgFor]
})
export class HomePage {
  constructor(nav: NavController, cart: Cart, products: Products) {
    this.nav = nav;
    this.cart = cart;
    this.products = products.products;
  }
  
  navPopular() {
    this.nav.push(GridPage);
  }
  
  navSale() {
    this.nav.push(ListPage);
  }
  
  addToCart(product) {
    this.cart.add(product);
    //this.broadcaster.next(1);
  }
}
