import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f91700001000001a82144ddd0284dff8b37a4601967f204'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) {}

  getData(search, perPage): Observable<any> {
    const url = `https://api.pexels.com/v1/search?query=${search}&per_page=${perPage}`;
    return this.http.get<any>(url, httpOptions)
      .pipe(catchError(this.handleErrow));
  }

  handleErrow(error) {
    return throwError((error.message || 'Server Error' ));
  }

}
