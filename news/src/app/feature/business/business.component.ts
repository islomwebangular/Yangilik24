import { Component, OnInit,inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../core/components/footer/footer.component';



@Component({
  selector: 'app-business',
  standalone: true,
  imports:[RouterLink,PopularNewsComponent,DatePipe,NavbarComponent,FooterComponent],
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
  