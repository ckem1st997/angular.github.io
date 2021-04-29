import { IMenuDesktop } from './../../../../models/IMenuDesktop';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { MenuServiceService } from "src/app/service/MenuService.service";
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {
  @Input() active: boolean | undefined;
  @Input() desktop: boolean| undefined;
  @Output() newItemEvent = new EventEmitter<boolean>();
  listmenu: IMenuDesktop[];
  constructor(private menu: MenuServiceService) {
   // console.log(this.listmenu)
   }

  ngOnInit() {
    this.getMenu()
  }

  getMenu(): void {
    this.menu.getMenu()
      .subscribe(item => this.listmenu = item);
  }
  iconActive(event: any) {
    if (event.target.parentNode.parentNode.className.indexOf("active") == -1)
      event.target.parentNode.parentNode.className =
        event.target.parentNode.parentNode.className + " active";
    else
      event.target.parentNode.parentNode.className = event.target.parentNode.parentNode.className.replace(
        " active",
        ""
      );
  }
  iconActive1(event: any) {
    if (event.target.parentNode.parentNode.className.indexOf("active") == -1)
      event.target.parentNode.parentNode.className =
        event.target.parentNode.parentNode.className + " active";
    else
      event.target.parentNode.parentNode.className = event.target.parentNode.parentNode.className.replace(
        " active",
        ""
      );
  }
  close(event: any) {
    event.target.parentNode.parentNode.parentNode.className = event.target.parentNode.parentNode.parentNode.className.replace(
      " active",
      ""
    );
    this.active = false;
    this.newItemEvent.emit(this.active);
  }
  closea(){
    this.active = false;
    this.newItemEvent.emit(this.active);
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
