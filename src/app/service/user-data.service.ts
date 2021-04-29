import { TokenStorageServiceService } from './TokenStorageService.service';
import { IUser } from './../models/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';
const AUTH_API = environment.Api;
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient,private au:TokenStorageServiceService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer '+this.au.getToken()
    })
  };
  getUser(id:any): Observable<IUser> {
    return this.http.get<IUser>(AUTH_API + 'accountapi/User/'+id+'',this.httpOptions)
    .pipe(catchError(this.handleError<IUser>('getuser'))
    )
  }

  updateUser(item:IUser): Observable<IUser> {
    return this.http.put<IUser>(AUTH_API + 'accountapi/User/'+item.id+'',item,this.httpOptions)
    .pipe(catchError(this.handleError<IUser>('getuser'))
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