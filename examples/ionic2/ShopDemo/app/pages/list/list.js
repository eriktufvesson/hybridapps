import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';
import {Navbar} from '../../components/navbar/navbar';

@Page({
  templateUrl: 'build/pages/list/list.html',
  directives: [Navbar]
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    
  }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    })
  }
}
