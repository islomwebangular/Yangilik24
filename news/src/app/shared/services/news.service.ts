import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../../core/models/IResponse';
import { INews } from '../../core/models/INews';
import { environment } from '../../../environments/environment';



@Injectable({providedIn: 'root'})
export class NewsService {

  http$=inject(HttpClient)

  getAllNews(country:string,category:string):Observable<IResponse<INews[]>>{
   
 return this.http$.get<IResponse<INews[]>>(environment.api+`country=${country}&category=${category}&apiKey=`+environment.apiKey
    
    
  );
  }
  
}
