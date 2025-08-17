import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import{FooterComponent} from './core/components/footer/footer.component'
import { SnackbarComponent } from "./core/components/snackbar/snackbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SnackbarComponent],
  template:
  ` 
  <div class="border-t-[4px] border-[#295093] ">
    <main class="custom-container grow  ">
    <router-outlet >
    </router-outlet>
    </main>
    <app-snackbar></app-snackbar>
  </div>
  `,
  styles:``,
})
export class AppComponent  {
  title = 'news';
}
