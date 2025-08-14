import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import{FooterComponent} from './core/components/footer/footer.component'
import { SnackBarMessage, SnackBarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template:
  `<app-navbar></app-navbar> 
  
  <main class="custom-container grow "> 
  <router-outlet ></router-outlet></main>
  <app-footer></app-footer>
     
  
  `,
  styles:``,
})
export class AppComponent implements OnInit  {
  snackBarService = inject(SnackBarService)
  snackBarMessage: SnackBarMessage| null=null
ngOnInit(): void {
  this.snackBarService.snackBar$.subscribe(snackBarMsg=>{
   
   this.snackBarMessage=snackBarMsg
   
  })
   
}

  title = 'news';
}
