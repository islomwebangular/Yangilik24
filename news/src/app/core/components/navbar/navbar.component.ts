import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatRippleModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles:``
})
export class NavbarComponent {

}
