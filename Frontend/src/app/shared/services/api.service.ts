import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@env';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { 
  }
   
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${env.serverUrl}${path}`, { params, withCredentials: true });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${env.serverUrl}${path}`,
      body
    );
  }
  
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${env.serverUrl}${path}`,
      body
    );
  }

  delete(path:string): Observable<any> {
    return this.http.delete(
      `${env.serverUrl}${path}`
    );
  }
}
