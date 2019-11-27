import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

// Endpoints
import { SEND } from '../constants/endpoints';

// Models
import {SendAuthorizationData} from '../models/send-authorization-data';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private http: HttpClient
  ) { }

  public send(message: SendAuthorizationData): Observable<any> {
    // return this.http.post(`${environment.apiUrl}${SEND}`, message, {
    //   responseType: 'json'
    // });
    console.log('-------SEND-------',)
    return null
  }
}
