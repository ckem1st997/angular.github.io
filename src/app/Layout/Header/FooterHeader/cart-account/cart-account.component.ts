import { MongoDBService } from './../../../../service/MongoDB.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-account',
  templateUrl: './cart-account.component.html',
  styleUrls: ['./cart-account.component.css']
})
export class CartAccountComponent implements OnInit {
  count: any
  constructor(private cart: MongoDBService) { }

  ngOnInit() {
    this.cart.getCartItems(window.localStorage.getItem("idCart")).subscribe(item => this.count = item.length)

  }

}
