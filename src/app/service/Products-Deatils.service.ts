import { IProductCategory } from './../models/IProductCategory';
import { IProductDetails } from './../models/IProductDetails.';
import { IProducts } from './../models/IProducts';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDeatilsService {
  private heroesUrl = environment.Api+"a/";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
   })
  };

  getProductsDeatails(id:number): Observable<IProductDetails> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IProductDetails>(this.heroesUrl+'PublicAPI/GetProductsDeatils/'+id+'')
      .pipe(catchError(this.handleError<IProductDetails>('getproductdetalis'))
      );
  }

  
  getProductsCategory(id:number): Observable<IProductCategory> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IProductCategory>(this.heroesUrl+'PublicAPI/GetProductsCT/'+id+'')
      .pipe(catchError(this.handleError<IProductCategory>('getproductctname'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}