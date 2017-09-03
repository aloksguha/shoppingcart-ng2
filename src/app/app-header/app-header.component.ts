import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  providers:[CartService]
})
export class AppHeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
