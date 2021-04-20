import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  congCart(event: any) {
   // console.log(event.target.parentNode.children[1].children[0].value)
    event.target.parentNode.children[1].children[0].value =Number(event.target.parentNode.children[1].children[0].value)+1;

  }

  truCart(event: any) {
    if (event.target.parentNode.children[1].children[0].value <= 0)
      event.target.parentNode.children[1].children[0].valuet = 0;
    else
      event.target.parentNode.children[1].children[0].value -= 1;
  }
}
