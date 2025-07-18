import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-item',
  standalone:true,
  imports:[RouterLink,],
  template:`
  <div>
    <img src="../../../../assets/images/prokuror.svg" alt="bu yerda prokuror rasmi bor" width="386" height="190">
    <a [routerLink]="['/']">   
    <span class="rubik-font font-medium text-[17px]">Lorem ipsum dolor sit amet consectetur.</span>
    </a>
    <span>18.06.2024</span>
  </div>
  `,
})

export class NewsItemComponent implements OnInit {

  ngOnInit() { }
}