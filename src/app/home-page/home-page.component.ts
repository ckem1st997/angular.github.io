import { IAricle } from './../models/IArticle';

import { HomeServiceService } from './../service/HomeService.service';
import { IProductsList } from './../models/IProductsList';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  listP: IProductsList[];
  listA: IAricle[]
  constructor(private list: HomeServiceService) {
  }

  ngOnInit() {
    this.getListProducts()
    console.log(this.slugify("Quần jeans áo thun đẹp lắm nha"))
  }

  getListProducts(): void {
    this.list.getListProducts()
      .subscribe(item => this.listP = item);
    this.list.getListArticle(0)
      .subscribe(i => this.listA = i);
  }
  slugify( text:string) {
    return text
    .toString()
    .normalize( 'NFD' )                   // split an accented letter in the base letter and the acent
    .replace( /[\u0300-\u036f]/g, '' )   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-'); 
  };
}
