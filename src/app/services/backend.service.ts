import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {
  static apiUrl = 'http://localhost:3000/';
  //for this example I assuming its variable token i am obtaining different for every user
  static JWTToken = 'ajhsdhjhssjdhfg345kjhg34ku5g';
}
