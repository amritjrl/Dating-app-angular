import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { login, User } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:5000';

  login(user: login): Observable<any> {
    let api = `${this.url}/login`;
    return this.http.post<any>(api, user);
  }
  getProfile(id: any): Observable<User> {
    let api = `${this.url}/api/users/${id}`;
    return this.http.get<User>(api);
  }
  signUp(user: any): Observable<any> {
    let api = `${this.url}/register`;
    return this.http.post(api, user);
  }
  getAll(): Observable<any> {
    let api = `${this.url}/api/users`;

    return this.http.get(api);
  }
  getAllByGender(id: any): Observable<any> {
    let api = `${this.url}/front/${id}`;
    return this.http.get(api);
  }
  likeProfile(id: any, user: any): Observable<any> {
    let api = `${this.url}/front/${id}`;

    return this.http.put(api, user);
  }
  isLogedIn() {
    return !!localStorage.getItem('access_token');
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  doclear() {
    return localStorage.clear();
  }
}
