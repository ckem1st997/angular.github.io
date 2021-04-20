import { IMenuDesktop } from './../../models/IMenuDesktop';
import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/service/MenuService.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /** header ctor */
  status: boolean = false;
  constructor(private menu: MenuServiceService) { }

  ngOnInit() {
  // this.getMenu()
  }

  // getMenu(): void {
  //   this.menu.getMenu()
  //   .subscribe(heroes => this.listmenu= heroes);
  // }
  MenuActive() {

    this.status = !this.status;
  }
  onResize() {
    this.status = false;
    // console.log(window.innerWidth);
    // window.innerWidth<768?this.status=false:this.status=true;
  }
  close(event: any) {
    this.status = false;
  }
}
