import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import{FooterComponent} from './core/components/footer/footer.component'
import { SnackbarComponent } from "./core/components/snackbar/snackbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SnackbarComponent],
  template:
  `<app-navbar></app-navbar> 
  <main class="custom-container grow "> 
  <router-outlet >
  </router-outlet></main>
  <app-footer></app-footer>
  <app-snackbar></app-snackbar>
  
 
  `,
  styles:``,
})
export class AppComponent  {
  title = 'news';
}
