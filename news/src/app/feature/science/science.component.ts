import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [RouterLink,DatePipe,PopularNewsComponent,NavbarComponent,FooterComponent],
  templateUrl: './science.component.html',
  styles: ``
})
export default class ScienceComponent implements OnInit {
  newsService=inject(NewsService)
  newsScience:INews[]=[]
  popularNews:INews[]=[]
 

ngOnInit(): void {
  this.newsService.getAllNews("us","science").subscribe(response=>{
  this.newsScience=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}
}
