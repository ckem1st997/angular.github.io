import { IProductsList } from './../models/IProductsList';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-arry-product',
  templateUrl: './arry-product.component.html',
  styleUrls: ['./arry-product.component.scss']
})
export class ArryProductComponent implements OnInit {
  @Input() slides: IProductsList[];
  constructor() {
    
   }

  ngOnInit() {
   
  }

  CeilPrice(a: number, b: number) {
    return Math.ceil((a / b) * 100)
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
