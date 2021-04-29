
import { ICart } from './../models/ICart';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MongoDBService } from '../service/MongoDB.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ListCart: ICart[]
  SumPrice: number = 0

  constructor(private notifier: NotifierService, private cart: MongoDBService) { }
  //339-226
  ngOnInit() {
    const idcart = localStorage.getItem("idCart");
    this.getCart(idcart);

  }
  showNotification(type: string, message: string) {
    this.notifier.notify(type, message);
  }
  slugify(text: string) {
    return text
      .toString()
      .normalize('NFD')                   // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  };
  getCart(id: any) {
    this.cart.getCartItems(id).subscribe(item => {
      this.ListCart = item,
        item.forEach(element => {
          this.SumPrice += element.price * element.count
        });
    })
  }
  congCart(event: any) {
    // console.log(event.target.parentNode.children[1].children[0].value)
    event.target.parentNode.children[1].children[0].value = Number(event.target.parentNode.children[1].children[0].value) + 1;

  }
  updatequantity(evt: any, id: any) {
    //  console.log(id)
    // console.log(evt.target.parentNode.children[0].children[0].value)
    const sl = evt.target.parentNode.children[0].children[0].value
    const data = this.ListCart.find(x => x.id == id);
    if (data) {
      const temp = this.SumPrice - data.price * data.count
      data.count = sl
      if (confirm("Bạn có muốn cập nhật !"))
        this.cart.updateCart(id, data).subscribe(response => {
          // console.log(response)
          if (response) {
            this.showNotification("success", "Cập nhật thành công nha !")
            this.SumPrice = temp + data.count * data.price
          }
          else
            this.showNotification("warning", "Cập nhật thất bại nha !")

        })
    }
    // console.log(data)
  }
  deleteItemCart(id: any, evt: any) {

    if (confirm("Bạn có muốn xoá sản phẩm này hông !"))
      this.cart.deleteItemCart(id).subscribe(response => {
        if (response) {
          const temp = this.ListCart.find(x => x.id == id)
          if (temp)
            this.SumPrice -= temp.price * temp.count
          this.showNotification("success", "Xoá thành công nha !")
          var del = document.getElementById("cart" + id + "")
          del?.remove()
          document.getElementById("hr" + id + "")?.remove()
        }
        else
          this.showNotification("warning", "Xoá thất bại nha !")

      })
  }
  truCart(event: any) {
    if (event.target.parentNode.children[1].children[0].value <= 0)
      event.target.parentNode.children[1].children[0].valuet = 0;
    else
      event.target.parentNode.children[1].children[0].value -= 1;
  }
}
