import {Page, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {CatDetailPage} from '../cat-detail/cat-detail';

@Page({
  templateUrl: 'build/pages/cats/cats.html',
})
export class CatsPage implements OnInit {
  
  public cats: Array<any> = [];
  public catsLoaded = false;
  public isLoading = true;
  
  constructor(public nav: NavController, private _http: Http) {}
  
  ngOnInit() {
    this.catsLoaded = false;
    this._http.get('https://kittenapi.herokuapp.com/cats/ties/30')
      .map(res => res.json())
      .subscribe(cats => {
        this.cats = cats;
        this.catsLoaded = true;
        this.isLoading = false;
      });
  }
  
  viewCat(cat) {
    this.nav.push(CatDetailPage, {cat: cat});
  }
  
  doInfinite(infiniteScroll) {
    this._http.get('https://kittenapi.herokuapp.com/cats/ties/30')
      .map(res => res.json())
      .subscribe(moreCats => {
        let self = this;
        moreCats.forEach(cat => self.cats.push(cat));
        infiniteScroll.complete();
      });
  }
}
