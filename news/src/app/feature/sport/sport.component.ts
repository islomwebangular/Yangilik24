import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [DatePipe,RouterLink,PopularNewsComponent],
  templateUrl: './sport.component.html',
  styles: ``
})
export default class SportComponent implements OnInit {
  newsService=inject(NewsService)
  newsSports:INews[]=[]
  popularNews:INews[]=[]
 

ngOnInit(): void {
  this.newsService.getAllNews("us","sport").subscribe(response=>{
  this.newsSports=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
