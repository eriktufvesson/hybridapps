import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';
import {Navbar} from '../../components/navbar/navbar';
import {Products} from '../../providers/products/products';
import {Filter} from '../../pipes/filter';
import {ProductPage} from '../product/product';

@Page({
  templateUrl: 'build/pages/list/list.html',
  directives: [Navbar],
  pipes: [Filter]
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams, products: Products) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.products = products.products;
  }

  navProduct(event, product) {
    this.nav.push(ProductPage, {
      product: product
    })
  }
}
