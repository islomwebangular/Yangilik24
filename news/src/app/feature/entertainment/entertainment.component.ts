import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [DatePipe, RouterLink,PopularNewsComponent],
  templateUrl: './entertainment.component.html',
  styles: ``
})
export default class EntertainmentComponent implements OnInit {
  newsService=inject(NewsService)
  newsEntertainment:INews[]=[]
  popularNews:INews[]=[]
  

ngOnInit(): void {
  this.newsService.getAllNews("us","entertainment").subscribe(response=>{
  this.newsEntertainment=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
