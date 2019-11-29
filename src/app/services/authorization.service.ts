import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

// Endpoints
import { SEND } from '../constants/endpoints';

// Models
import {SendAuthorizationData} from '../models/send-authorization-data';
import {delay} from "rxjs/operators";

export interface IResponseData {
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private http: HttpClient
  ) { }

  public send(message: SendAuthorizationData): Observable<IResponseData> {
    // return this.http.post(`${environment.apiUrl}${SEND}`, message, {
    //   responseType: 'json'
    // });
    const responseData: IResponseData = {
      name: 'Test User',
      role: 'admin'
    }
    localStorage.setItem('token', 'token');
    localStorage.setItem('role', responseData.role);
    return of(responseData).pipe(
      delay(1000)
    );
  }

  public isAdmin(): Observable<boolean> {
    const result = true; //Math.random() % 2 === 0;
    return of(result).pipe(
      delay(1000)
    )
  }
}
