import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { FooterComponent } from "../../core/components/footer/footer.component";
import { NewsComponent } from "../../core/components/news/news.component";
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { LatestNewsComponent } from "../../core/components/latest-news/latest-news.component";
import { PopularNewsComponent } from "../../shared/components/popular-news/popular-news.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsComponent, LatestNewsComponent, PopularNewsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent implements OnInit {
  newsService= inject(NewsService)
  newsItems: INews[]=[]
  latestNews:INews[]=[]
  popularNews:INews[]=[] 

  ngOnInit(): void {
    
   this.newsService.getAllNews('us','').subscribe(newsResponse=>{
     this.newsItems=newsResponse.articles
     console.log(newsResponse.articles);
   })
   this.newsService.getAllNews('us','').subscribe(response=>{
    this.latestNews=response.articles
   })
   this.newsService.getAllNews('us','').subscribe(response=>{
    this.popularNews=response.articles
  })
  
  }
}
