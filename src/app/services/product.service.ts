import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Product } from '../product-list/product';
import { BackendService } from './backend.service'
@Injectable()
export class ProductService {
    private allProducts: Array<Product> = [];
    constructor(private http: Http) { }

    getAllProducts(): Observable<Product[]> {
        const headers = this.getHeaders();
        return this.http.get(BackendService.apiUrl + 'product', {
            headers: headers
        })
            .map(res => res.json().products)
            .catch(this.handleErrors);
    }

    getProduct(id): Observable<Product> {
        const headers = this.getHeaders();
        return this.http.get(BackendService.apiUrl + 'product/'+id, {
            headers: headers
        })
        .map(res => res.json())
        .catch(this.handleErrors);

    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}