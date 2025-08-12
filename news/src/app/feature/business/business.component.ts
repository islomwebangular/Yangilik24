import { Component, OnInit,inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-business',
  standalone: true,
  imports:[RouterLink,PopularNewsComponent,DatePipe],
  templateUrl: './business.component.html',
  styles:``
})
export default class BusinessComponent implements OnInit {
  newsService=inject(NewsService)
  newsBusiness:INews[]=[]
  popularNews:INews[]=[]

ngOnInit(): void {
  this.newsService.getAllNews("us","business").subscribe(response=>{
  this.newsBusiness=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
  