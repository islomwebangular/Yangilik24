import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../../shared/services/news.service';
import { INews } from '../../models/INews';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone:true,
  imports:[RouterLink,DatePipe],
  templateUrl:"./news.component.html"
})

export class NewsComponent implements OnInit{
@Input() newsItem? :INews
 ngOnInit(): void {
   
 }
}