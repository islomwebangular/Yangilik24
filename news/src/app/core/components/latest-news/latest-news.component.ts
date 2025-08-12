import { Component, Input, OnInit } from '@angular/core';
import { INews } from '../../models/INews';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './latest-news.component.html',
  styles: ``
})
export class LatestNewsComponent implements OnInit {
 @Input() latestNewsItem?: INews
 
 today: Date = new Date()
 todayJson=this.today.toJSON().slice(0,11)
 yesterdayJson:string =" "
 
 
 

 
 ngOnInit(): void {
 const yesterday =new Date(this.today)
 yesterday.setDate(this.today.getDate()-1)
 this.yesterdayJson=yesterday.toJSON().slice(0,11)
 


    
 }
}
