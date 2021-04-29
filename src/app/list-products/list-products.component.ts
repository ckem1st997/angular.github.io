import { ISize } from './../models/ISize';
import { IColor } from './../models/IColor';
import { IProductsList } from './../models/IProductsList';
import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceService } from '../service/HomeService.service';
import { PhanTrangServiceService } from '../service/PhanTrangService.service';
import { IPhanTrang } from '../models/IPhanTrang';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  slides: IProductsList[];
  codeSnippetText = 'Source Code';
  currentValues = [0, 0];
  id: number;
  numberpage: number = 1;
  numberlist: number = 1;
  xapsep: number = 0;
  coutpage: number = 5
  arrypage: number[] = [1, 2, 3, 4, 5];
  listcolor:IColor[]
  listsize:ISize[]
  color:string="";
  size:string="";
  namepc:string="Sản phẩm";
  imgpc:string;
  constructor(private router: Router, private list: HomeServiceService, private item: PhanTrangServiceService, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.route.snapshot.params.id;
        // this.numberpage=1
        // this.xapsep=0
        this.color="";
        this.size="";
        this.getListProducts()
      }
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getListProducts()
    //console.log(2)
  }
  OnChanges() {
    // console.log(this.id)
  }
  getListProducts(): void {
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1], this.size, this.color, this.xapsep, this.numberpage);
    this.item.getSC().subscribe(item=>{
      this.listcolor=item.colors;
      this.listsize=item.sizes
    })
  }

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;
  }
  Search(){
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1], this.size, this.color, this.xapsep, this.numberpage);

  }
  SelectNumber(num: number, ent: any) {
    this.numberpage = num;
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1], this.size, this.color, this.xapsep, this.numberpage);
  }
  changeColor(evt:any){

this.color=evt.target.value;
  }
  changeSize(evt:any){

    this.size=evt.target.value;
      }
  Select(ent: any) {
    this.xapsep = ent.target.value;
    this.numberpage=1
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1],this.size, this.color, this.xapsep, this.numberpage);
  }
  nextpage(event: any) {
    this.numberpage = this.numberpage + 1;
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1],this.size, this.color, this.xapsep, this.numberpage);

  }
  blackpage(event: any) {
    if (this.numberpage > 1)
      this.numberpage = this.numberpage - 1;
    this.PhanTrang(this.id, this.currentValues[0], this.currentValues[1], this.size, this.color, this.xapsep, this.numberpage);

  }
  PhanTrang(productsCT: number = 0, priceMin?: number, priceMax?: number, size?: string, color?: string, type?: number, numberpage: number = 1) {
    this.item.getPhanTrang(productsCT, priceMin, priceMax, size, color, type, numberpage).subscribe(i => {
      this.slides = i.selectParents;
      this.namepc=i.namepc;
      this.numberpage = i.numberpage;
      this.coutpage = i.countpage;
      this.imgpc=i.imgpc;
      if (this.numberpage <= 5)
        this.numberlist = 0
      else if (this.numberpage % 5 != 0)
        this.numberlist = Math.floor(this.numberpage / 5) + 1;
      else
        this.numberlist = this.numberpage / 5;
     // console.log(this.numberlist)
      if (this.numberlist * 5 >= this.coutpage || this.coutpage < 5)
        this.numberlist = this.coutpage;
      else
        this.numberlist = 5 * this.numberlist
      if (this.numberlist > 0) {
        this.arrypage = []
        for (let index = this.numberlist - 4 > 0 ? this.numberlist - 4 : 1; index <= this.numberlist; index++) {
          this.arrypage.push(index);
        }
      }
      else
        this.arrypage = [1, 2, 3, 4, 5]
    }

    );

  }

}
