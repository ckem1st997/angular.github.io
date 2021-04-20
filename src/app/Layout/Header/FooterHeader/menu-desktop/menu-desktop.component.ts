import { IMenuDesktop } from './../../../../models/IMenuDesktop';
import { Component, OnInit, Input } from '@angular/core';
import { MenuServiceService } from 'src/app/service/MenuService.service';



@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent implements OnInit {
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
