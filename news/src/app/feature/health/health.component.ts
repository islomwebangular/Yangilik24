import { Component, inject } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [RouterLink,DatePipe,PopularNewsComponent,NavbarComponent,FooterComponent],
  templateUrl: './health.component.html',
  styles: ``
})
export default class HealthComponent {
  newsService=inject(NewsService)
  newsHealth:INews[]=[]
  popularNews:INews[]=[]
 

ngOnInit(): void {
  this.newsService.getAllNews("us","health").subscribe(response=>{
  this.newsHealth=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
}

}
