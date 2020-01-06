import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UserModel } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Object> {
    return this.http.get('http://localhost:3000/users');
  }

  getById(id: number): Observable<Object> {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  /*register(user: UserModel): Observable<Object> {
    return this.http.post('http://localhost:3000/users/register'), {
      username: user.username,
      password: user.password
    };
  }*/
}
