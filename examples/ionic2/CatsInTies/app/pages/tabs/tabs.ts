import {Page, NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {CatsPage} from '../cats/cats';

/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  constructor(public nav: NavController) {}
  
  tab1Root: any = CatsPage;
  tab2Root: any = AboutPage;
}
