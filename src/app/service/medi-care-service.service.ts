import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { global } from '../utility/endpoint';

@Injectable({
  providedIn: 'root'
})
export class MediCareServiceService {

  constructor(public http: HttpClient) { }

  private extractData(res: any) {
    let body = res;
    return body || {};
  }

  authCheck(reqObj: any): Observable<any> {
    let header = new HttpHeaders().set(
      "Authorization",
      global.requestToken
    );
    
    return this.http.post(global.authCheck, reqObj, { headers: header }).pipe(map(this.extractData))

  }
}
