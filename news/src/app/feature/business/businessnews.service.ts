import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../../core/models/IResponse';
import { INews } from '../../core/models/INews';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class BusinessNewsService {
 
  https$= inject(HttpClient)
  getAllBusiness():Observable<IResponse<INews[]>>{
    return this.https$.get<IResponse<INews[]>>(environment.api+"countr=us&category=business&apiK="+environment.apiKey)
  }
}