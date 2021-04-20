import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {

  @Input() active: boolean=true;
  @Input() desktop: boolean| undefined;
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
    // this.listmenu = LISTMENU;
    // console.log(this.listmenu)
  }
  showoption(event:any){
   // console.log(event.target.parentNode.parentNode.children[1])
    if (event.target.parentNode.parentNode.children[1].className.indexOf('show')==-1)
    event.target.parentNode.parentNode.children[1].className=event.target.parentNode.parentNode.children[1].className+" show";
    else
    event.target.parentNode.parentNode.children[1].className=event.target.parentNode.parentNode.children[1].className.replace(' show','')


  }
}