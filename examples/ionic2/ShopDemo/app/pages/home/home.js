import {Page, NavController} from 'ionic/ionic';
import {ListPage} from '../list/list';
import {GridPage} from '../grid/grid';
import {Navbar} from '../../components/navbar/navbar';
import {Products} from '../../providers/products/products';
import {NgFor} from 'angular2/common';
import {ProductListItem} from '../../components/product-list-item/product-list-item';
import {Filter} from '../../pipes/filter';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [Navbar, NgFor, ProductListItem],
  pipes: [Filter]
})
export class HomePage {
  constructor(nav: NavController, products: Products) {
    this.nav = nav;
    this.products = products.products;
  }
  
  navPopular() {
    this.nav.push(GridPage);
  }
  
  navSale() {
    this.nav.push(ListPage);
  }
}
