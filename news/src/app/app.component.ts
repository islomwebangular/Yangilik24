import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import{FooterComponent} from './core/components/footer/footer.component'
import { NewsComponent} from './core/components/news/news.component';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template:
  `
   <app-navbar></app-navbar> 
  
  <main class="custom-container grow "> <router-outlet ></router-outlet></main>

 

  <app-footer></app-footer>
  `,
  styles:[``]
})
export class AppComponent {

  title = 'news';
}
