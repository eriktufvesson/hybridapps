import {Component, Input} from 'angular2/core';
import {IONIC_DIRECTIVES, NavController} from 'ionic/ionic';
import {ProductPage} from '../../pages/product/product';

@Component({
  selector: 'product-list-item',
  templateUrl: 'build/components/product-list-item/product-list-item.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class ProductListItem {
  @Input() product;
  constructor(nav: NavController) {
    this.nav = nav;
  }
  
  navProduct(product) {
    this.nav.push(ProductPage, {
      product: product
    });
  }
}
