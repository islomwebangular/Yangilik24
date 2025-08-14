import { Component, OnInit,inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { DatePipe } from '@angular/common';
import { BusinessNewsService } from './businessnews.service';


@Component({
  selector: 'app-business',
  standalone: true,
  imports:[RouterLink,PopularNewsComponent,DatePipe],
  templateUrl: './business.component.html',
  styles:``
})
export default class BusinessComponent implements OnInit {
  newsService=inject(NewsService)
  businessNewsService=inject(BusinessNewsService)
  newsBusiness:INews[]=[]
  popularNews:INews[]=[]

ngOnInit(): void {
   this.businessNewsService.getAllBusiness().subscribe(res=>{
    this.newsBusiness=res.articles
    
   })
   
  // this.newsService.getAllNews("us","business").subscribe(response=>{
  // this.newsBusiness=response.articles
  // })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
  