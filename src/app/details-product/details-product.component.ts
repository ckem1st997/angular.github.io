import { IProductCategory } from 'src/app/models/IProductCategory';
import { GetSize } from './../models/GetSize';
import { GetColor } from './../models/GetColor';
import { IProducts } from './../models/IProducts';
import { element } from 'protractor';
import { IProductDetails } from './../models/IProductDetails.';
import { Component, OnInit } from '@angular/core';
import { ProductsDeatilsService } from '../service/Products-Deatils.service';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../extension/Guid';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  ProductDetalis: IProductDetails;
  ProductPC: IProductCategory
  srcimg: string;
  numberproduct: number = 1;
  btnreview: boolean = false;
  id: number;
  listimg: string[]
  product: IProducts
  color: GetColor[]
  size: GetSize[]
  nameCT: string
  listSelect: string = ""
  constructor(private item: ProductsDeatilsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getPD();

  }
  CeilPrice(a: number, b: number) {
    return Math.ceil((a / b) * 100)
  }
  getPD(): void {
    const id = this.route.snapshot.params.id;
    this.item.getProductsDeatails(id).subscribe(item => {
      this.ProductDetalis = item,
        this.listimg = item.product.image.split(',').slice(1)
      this.srcimg = "http://res.cloudinary.com/imageshared/image/upload/c_fill,f_auto,h_828,q_auto,w_828/v1/" + this.listimg[0]
      this.product = this.ProductDetalis.product
      this.color = this.ProductDetalis.getColors
      this.size = this.ProductDetalis.getSizes
      this.getPC()
    });
  }
  getPC() {
    this.item.getProductsCategory(this.product.productCategorieId).subscribe(item => {
      this.ProductPC = item
    });
  }

  changeImage(event: any) {
    var list = event.target.parentNode.parentNode.parentNode.children;
    for (let index = 0; index < list.length; index++) {
      list[index].className = list[index].className.replace(" active", "");
    }
    this.srcimg = event.target.src;
    event.target.parentNode.parentNode.className = event.target.parentNode.parentNode.className + " active";
  }

  checkedSize(event: any) {
    var list = event.target.parentNode.parentNode.parentNode.children;
    for (let index = 0; index < list.length; index++) {
      list[index].children[0].className = list[index].children[0].className.replace(" checked", "");
      // console.log(list[index].children[0].className)
    }
    event.target.parentNode.className = event.target.parentNode.className + " checked";
  }

  btnCong() {
    this.numberproduct += 1;
  }
  btnTru() {
    if (this.numberproduct <= 1)
      this.numberproduct = 1;
    else
      this.numberproduct -= 1;
  }
  changactivebtn() {
    this.btnreview = !this.btnreview;

  }

  addCart(ent: any) {
    if (localStorage.getItem('idCart') == null)
      localStorage.setItem('idCart', Guid.newGuid());
    console.log(this.product.productId)
    console.log(localStorage.getItem('idCart'))
    console.log(this.product.price)
    console.log(this.product.image.split(',')[1])
    console.log(this.numberproduct)
    var color = document.getElementsByClassName("swatch-element")
    for (let index = 0; index < color.length; index++) {
      const element = color[index];

      if (element.className.indexOf("checked") != -1) {
        //  console.log(element.id)
        this.listSelect += "," + element.id
        //console.log(element.children[0])
      }

    }

    console.log(this.listSelect)
  }
}

