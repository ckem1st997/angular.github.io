import { IAricle } from './../models/IArticle';
import { IProductsList } from './../models/IProductsList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private heroesUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
   })
  };

  getListProducts(): Observable<IProductsList[]> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IProductsList[]>(this.heroesUrl+'PublicAPI/GetProductsHome',this.httpOptions)
      .pipe(catchError(this.handleError<IProductsList[]>('getproducts', []))
      );
  }

  getListArticle(num?:number): Observable<IAricle[]> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IAricle[]>(this.heroesUrl+'PublicAPI/GetArticle?id='+num+'',this.httpOptions)
      .pipe(catchError(this.handleError<IAricle[]>('getarticle', []))
      );
  }

  getArticle(id:number): Observable<IAricle> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IAricle>(this.heroesUrl+'PublicAPI/GetArticleId?id='+id+'',this.httpOptions)
      .pipe(catchError(this.handleError<IAricle>('getarticleid'))
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