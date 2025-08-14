import { Injectable,inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface SnackBarMessage{
  message:string,
  cancelText?:string,
  duration?:number,
}
 


@Injectable({providedIn: 'root'})
export class SnackBarService {
snackBar$ = new BehaviorSubject<SnackBarMessage|null>(null)

  
}