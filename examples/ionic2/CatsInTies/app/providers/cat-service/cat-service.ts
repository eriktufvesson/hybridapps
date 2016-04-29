import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Cat} from '../../models/cat';

@Injectable()
export class CatService {

  constructor(private _http: Http) {}

  getCats() {
    return this._http.get('https://kittenapi.herokuapp.com/cats/ties/30')
      .map(res => {
        let rawData = res.json();
        let cats = new Array<Cat>();
        rawData.forEach(cat => {
          cats.push(new Cat(cat.id, cat.url, cat.source_url));
        });
        return cats;
      });
  }
}

