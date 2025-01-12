import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/component/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  template:
  `<router-outlet></router-outlet>
    <app-navbar></app-navbar>
  `,
  styles:[``]
})
export class AppComponent {
  title = 'news';
}
