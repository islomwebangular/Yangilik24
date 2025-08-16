import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { SnackBarMessage, SnackBarService } from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [],
  template: `
      @if (snackBarMessage) {
      <div class=" flex items-center justify-between absolute top-4 right-4 !bg-red-600 gap-5  py-2 px-5 rounded-lg z-40">
      <p class=" !m-0 text-lg text-white">{{snackBarMessage.message}}</p>
      <button class="text-white" (click)="snackBarMessage= null" mat-stroked-button> {{snackBarMessage.cancelText}}</button>
     </div>
    }
  `,
  styles: ``
})
export class SnackbarComponent implements OnInit {
  snackBarService = inject(SnackBarService)
  snackBarMessage: SnackBarMessage| null=null
ngOnInit(): void {
  this.snackBarService.snackBar$.subscribe(snackBarMsg=>{
    this.snackBarMessage=snackBarMsg
  })
   

   
}  
}
