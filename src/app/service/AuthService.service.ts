
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { IRegister } from '../models/IRegister';
import { ILogin } from '../models/ILogin';


const AUTH_API = environment.Api;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
   })
  };

  login(item:ILogin): Observable<any> {
    return this.http.post<any>(AUTH_API + 'accountapi/User/Login', item, this.httpOptions)
    .pipe(catchError(
      this.handleError<any>('login'))
    );
  }

  register(item:IRegister): Observable<any> {
    return this.http.post<any>(AUTH_API + 'accountapi/User/addAcount',item, this.httpOptions)
    .pipe(catchError(
      this.handleError<any>('Register'))
    )
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