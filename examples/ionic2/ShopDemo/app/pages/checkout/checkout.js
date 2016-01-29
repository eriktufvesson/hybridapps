import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/checkout/checkout.html',
})
export class CheckoutPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
