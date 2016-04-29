import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/cat-detail/cat-detail.html',
})
export class CatDetailPage implements OnInit {
  cat: any;
  
  constructor(public navParams: NavParams) {}
  
  ngOnInit() {
    this.cat = this.navParams.get('cat');
  }
}
