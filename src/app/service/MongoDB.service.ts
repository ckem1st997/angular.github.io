import { ICart } from './../models/ICart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {
  private heroesUrl = environment.Api;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getCartItems(Cartid: any): Observable<ICart[]> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.get<ICart[]>(this.heroesUrl + 'api/Carts/' + Cartid + '', this.httpOptions)
      .pipe(catchError(this.handleError<ICart[]>('getcart', []))
      );
  }

  addCart(item: ICart): Observable<ICart> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.post<ICart>(this.heroesUrl + 'api/Carts/addCart', item, this.httpOptions)
      .pipe(catchError(this.handleError<ICart>('getcart'))
      );
  }

  updateCart(id: string, item: ICart): Observable<ICart> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.put<ICart>(this.heroesUrl + 'api/Carts/' + id + '', item, this.httpOptions)
      .pipe(catchError(this.handleError<ICart>('update'))
      );
  }

  deleteItemCart(id:string): Observable<ICart> {
    // return this.http.get<IMenuDesktop[]>(this.heroesUrl);
    return this.http.delete<ICart>(this.heroesUrl + 'api/Carts/' + id + '', this.httpOptions)
      .pipe(catchError(this.handleError<ICart>('delete'))
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
