import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenuDesktop } from '../models/IMenuDesktop';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private heroesUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
   })
  };

  getMenu(): Observable<IMenuDesktop[]> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<IMenuDesktop[]>(this.heroesUrl+'PublicAPI/getMenuDesktop',this.httpOptions)
      .pipe(catchError(this.handleError<IMenuDesktop[]>('getHeroes', []))
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
