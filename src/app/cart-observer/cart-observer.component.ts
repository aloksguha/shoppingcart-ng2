import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-observer',
  templateUrl: './cart-observer.component.html',
  styleUrls: ['./cart-observer.component.css']
})
export class CartObserverComponent implements OnInit {

  products: any[] = []
  numProducts: number = 0
  cartTotal: number = 0;
  changeDetectorRef: ChangeDetectorRef;

  constructor(private cartService: CartService, changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnInit() {
    this.cartService.productAdded$$.subscribe(data => {
      this.products = data.products;
      this.cartTotal = data.cartTotal;
      this.numProducts = data.products.reduce((acc, product) => {
        acc+=product.quantity
        return acc
      }, 0)
      this.changeDetectorRef.detectChanges();
    });
  }

  deleteProduct(product) {
    this.cartService.deleteProductFromCart(product);
  }

  flushCart(){
    this.cartService.flushCart();
  }
}
