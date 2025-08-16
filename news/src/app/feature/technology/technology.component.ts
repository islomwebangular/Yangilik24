import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [RouterLink,DatePipe,PopularNewsComponent],
  templateUrl: './technology.component.html',
  styles: ``
})
export default class TechnologyComponent implements OnInit {
  newsService=inject(NewsService)
  newsTechnology:INews[]=[]
  popularNews:INews[]=[]
  

ngOnInit(): void {
  this.newsService.getAllNews("us","technology").subscribe(response=>{
  this.newsTechnology=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
