import { inject } from '@angular/core';
import { HttpRequest, HttpResponse, HttpInterceptorFn, HttpHandlerFn,  } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SnackBarService } from '../../shared/services/snackbar.service';

export const  ErrorInterceptor:HttpInterceptorFn = (req:HttpRequest<any>,next:HttpHandlerFn)=>{
  const snackBarService= inject(SnackBarService)
 return next(req).pipe(catchError((error:HttpResponse<Error>)=>{
  snackBarService.snackBar$.next({message:error.statusText,cancelText:"OK"})
  return of(error)
 }
))
}