import { Component, OnInit } from '@angular/core';
import { IAricle } from '../models/IArticle';
import { HomeServiceService } from '../service/HomeService.service';

@Component({
  selector: 'app-List-Article',
  templateUrl: './List-Article.component.html',
  styleUrls: ['./List-Article.component.scss']
})
export class ListArticleComponent implements OnInit {
  listA: IAricle[]
  constructor(private list: HomeServiceService) { }

  ngOnInit() {
    this.getValue()
  }
  getValue() {
    this.list.getListArticle(0).subscribe(item => this.listA = item)
  }
}
