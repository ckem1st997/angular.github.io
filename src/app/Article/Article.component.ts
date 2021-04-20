import { IAricle } from './../models/IArticle';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HomeServiceService } from '../service/HomeService.service';

@Component({
  selector: 'app-Article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.scss']
})
export class ArticleComponent implements OnInit {
  id: number;
  article: IAricle;
  listA: IAricle[]
  constructor(private list: HomeServiceService, private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.route.snapshot.params.id;
        // this.numberpage=1
        // this.xapsep=0
        this.getValue()
      }
    })
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getValue()

  }
  getValue() {
    this.list.getListArticle(this.id).subscribe(item => this.listA = item)
    this.list.getArticle(this.id).subscribe(item => this.article = item)
  }
}
