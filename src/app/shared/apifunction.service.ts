
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class ApifunctionService <T>{
  constructor(@Inject (String) public configUrl:string,public http: HttpClient) { }

  get(): Observable<T> {
    return this.http.get<T>(this.configUrl);
  }

  getbyId(id): Observable<T> {
    return this.http.get<T>(this.configUrl+`/${id}`);
  }

  post(object: T): Observable<T> {
    return this.http.post <T> (this.configUrl, object)
  }

  delete(id): Observable<T> {
    return this.http.delete<T> (this.configUrl+`/${id}`);
  }

  put(object: T,id): Observable<T>{
    return this.http.put <T> (this.configUrl +`/${id}`, object) }

}
