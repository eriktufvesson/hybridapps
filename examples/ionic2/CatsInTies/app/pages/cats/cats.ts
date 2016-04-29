import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {CatDetailPage} from '../cat-detail/cat-detail';
import {CatService} from '../../providers/cat-service/cat-service';
import {Cat} from '../../models/cat';

@Page({
  templateUrl: 'build/pages/cats/cats.html',
  providers: [CatService]
})
export class CatsPage implements OnInit {
  
  public cats: Array<Cat> = [];
  public catsLoaded = false;
  public isLoading = true;
  
  constructor(public nav: NavController, private _catService: CatService) {}
  
  ngOnInit() {
    this.catsLoaded = false;
    
    this._catService.getCats()
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
    this._catService.getCats()
      .subscribe(moreCats => {
        let self = this;
        moreCats.forEach(cat => self.cats.push(cat));
        infiniteScroll.complete();
      });
  }
}
