import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleLoanService {

  constructor(private http: HttpClient,) { }

  getLoanInterest(endPoint:any, formValues:any, headers:any):Observable<{}> {

    return this.http.post(endPoint, formValues, headers);

  }


}
