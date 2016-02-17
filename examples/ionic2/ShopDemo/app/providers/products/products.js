import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {API_URL} from '../../config';

@Injectable()
export class Products {
    constructor(http: Http) {
        this.http = http;

        this.products = null;
    }

    all() {
        return this.http.get(API_URL + 'products')
            .map(res => res.json())
            .catch(this.handleError);
    }

    likes(productId) {
        return this.http.get(API_URL + 'likes?productId=' + productId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addLike(product, userId) {
        let like = { productId: product.id, userId: userId };
        let body = JSON.stringify(like);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(API_URL + 'likes', body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    comments(productId) {
        return this.http.get(API_URL + 'comments?productId=' + productId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    addComment(comment) {
        let body = JSON.stringify(comment);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(API_URL + 'comments', body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

