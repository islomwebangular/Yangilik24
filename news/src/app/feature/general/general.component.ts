import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { INews } from '../../core/models/INews';
import { PopularNewsComponent } from '../../shared/components/popular-news/popular-news.component';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IfStmt } from '@angular/compiler';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ PopularNewsComponent,DatePipe, RouterLink,NavbarComponent,FooterComponent],
  templateUrl: './general.component.html',
  styles: ``
})
export default class GeneralComponent implements OnInit {
  newsService=inject(NewsService)
  newsGeneral:INews[]=[]
  popularNews:INews[]=[]
 
  

ngOnInit(): void {
  this.newsService.getAllNews("us","general").subscribe(response=>{
  this.newsGeneral=response.articles
  })
  this.newsService.getAllNews("us","").subscribe(response=>{
    this.popularNews=response.articles
  })
   
}
}

