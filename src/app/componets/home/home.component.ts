import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items=[1,2,3,4,5,6,7,8,9];
  constructor(
    private articleService:ArticleService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles(){
    this.articleService.getProfile().subscribe(data=>{
      console.log(data)
    })
  }
}
