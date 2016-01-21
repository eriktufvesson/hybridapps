import {Component, CORE_DIRECTIVES, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {IONIC_DIRECTIVES, NavController} from 'ionic/ionic';
import {CartPage, Cart} from '../../pages/cart/cart';
import {ListPage} from '../../pages/list/list';

/*
  Generated class for the Navbar component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'navbar',
  templateUrl: 'build/components/navbar/navbar.html',
  directives: [IONIC_DIRECTIVES, NgIf] // makes all Ionic directives available to your component
})
export class Navbar {
  @Input() pageTitle;
  constructor(nav: NavController, cart: Cart) {
    this.nav = nav;
    this.cart = cart;
    this.cartSize = 0;
    
    cart.rxEmitter.subscribe((products) => {
      console.log('rxEmitter event caught', products);
      this.cartSize = products.length;
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.title = this.pageTitle;
    });
  }

  navCart() {
    this.nav.push(CartPage);
  }

  navSearch() {
    this.nav.push(ListPage);
  }
}
