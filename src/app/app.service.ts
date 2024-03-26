import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient,
  ) { }

  public saveContact(data: Contact): Observable<any> {
    const url = 'https://formspree.io/f/xoqkovpk';
    return this.http.post<any>(url, data);
  }
}
