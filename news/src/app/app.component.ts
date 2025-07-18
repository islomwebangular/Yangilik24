import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import{FooterComponent} from './core/component/footer/footer.component'
import { NewsItemComponent } from './core/component/news/news-item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template:
  `
   <app-navbar></app-navbar> 
    <router-outlet></router-outlet>
  `,
  styles:[``]
})
export class AppComponent {
  title = 'news';
}
