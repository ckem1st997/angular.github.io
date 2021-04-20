import { GetColorSize } from './../models/GetColorSize';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { IPhanTrang } from '../models/IPhanTrang';

@Injectable({
  providedIn: 'root'
})
export class PhanTrangServiceService {
  private heroesUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
   })
  };

getPhanTrang(productsCT:number=0,priceMin?: number, priceMax?: number, size?: string, color?: string, type?: number, numberpage: number=1): Observable<IPhanTrang> {
  // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
  return this.http.get<IPhanTrang>(this.heroesUrl+'PublicAPI/GetPhanTrang?productsCT='+productsCT+'&priceMin='+priceMin+'&priceMax='+priceMax+'&size='+size+'&color='+color+'&type='+type+'&numberpage='+numberpage+'')
    .pipe(catchError(this.handleError<IPhanTrang>('getproductctname'))
    );
}

getSC(): Observable<GetColorSize> {
  // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
  return this.http.get<GetColorSize>(this.heroesUrl+'PublicAPI/GetAllColorAndSize')
    .pipe(catchError(this.handleError<GetColorSize>('GetAllColorAndSize'))
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
