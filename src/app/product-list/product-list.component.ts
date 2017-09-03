import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Product} from './product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, CartService]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private store: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cart: CartService
  ) { }

  ngOnInit() {
    this.store.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addToCart(product){
    this.cart.addProductToCart(product);
  }


}
