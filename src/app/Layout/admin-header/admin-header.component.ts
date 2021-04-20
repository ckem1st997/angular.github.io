import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
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


