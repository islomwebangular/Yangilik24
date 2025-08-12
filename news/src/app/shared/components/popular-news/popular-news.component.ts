import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INews } from '../../../core/models/INews';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './popular-news.component.html',
  styles:``
})
export class PopularNewsComponent {
 @Input() popularNews?: INews
}
