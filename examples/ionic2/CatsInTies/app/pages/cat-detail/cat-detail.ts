import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/cat-detail/cat-detail.html',
})
export class CatDetailPage implements OnInit {
  cat: any;
  
  constructor(private navParams: NavParams, private nav: NavController) {}
  
  ngOnInit() {
    this.cat = this.navParams.get('cat');
  }
}
