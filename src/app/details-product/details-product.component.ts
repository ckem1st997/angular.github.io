import { ICart } from './../models/ICart';
import { MongoDBService } from './../service/MongoDB.service';
import { IProductCategory } from 'src/app/models/IProductCategory';
import { GetSize } from './../models/GetSize';
import { GetColor } from './../models/GetColor';
import { IProducts } from './../models/IProducts';
import { element } from 'protractor';
import { IProductDetails } from './../models/IProductDetails.';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsDeatilsService } from '../service/Products-Deatils.service';
import { ActivatedRoute } from '@angular/router';
import { Guid } from '../extension/Guid';
import { NotifierService } from 'angular-notifier';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';
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
  Cart: ICart
  //
  @ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryRed;
  public secondaryColour = SecondaryBlue;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };

  //
  constructor(private notifier: NotifierService, private item: ProductsDeatilsService, private route: ActivatedRoute, private cart: MongoDBService) {
  }
  showNotification(type: string, message: string) {
    this.notifier.notify(type, message);
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

    //  console.log(this.listSelect)
  }

  btnChange(event: any) {
    this.numberproduct = Number(event.target.value);
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
    this.listSelect = "";
    var color = document.getElementsByClassName("swatch-element")
    for (let index = 0; index < color.length; index++) {
      const element = color[index];
      if (element.className.indexOf("checked") != -1) {
        this.listSelect += "," + element.id
      }
    }
    const data = {
      id: "",
      cartId: localStorage.getItem('idCart'),
      productID: this.product.productId,
      price: this.product.saleOff > 0 ? this.product.price - this.product.saleOff : this.product.price,
      image: this.product.image.split(',')[1],
      count: this.numberproduct > 0 ? this.numberproduct : 1,
      size: this.listSelect.split(',')[2],
      color: this.listSelect.split(',')[1],
      dateCreated: undefined,
      name: this.product.name
    }
    this.loading = true
    //  console.log(data)
    this.cart.addCart(data).subscribe(
      response => {
        // console.log(response);
        this.loading = false
        if (response)
        {
          this.showNotification("success", "Thêm thành công nha !")

        }
        else {
          this.showNotification("warning", "Thất bại, xin vui lòng thử lại nha !")
          this.showNotification("warning", "Lỗi sản phẩm hoặc !")
          this.showNotification("warning", "Số lượng max giỏ hàng là 10 !")
        }

      },
      error => {
        console.log(error);
      });
  }
}
//https://www.npmjs.com/package/angular-notifier

