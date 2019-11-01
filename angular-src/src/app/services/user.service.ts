import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl = '/api';
  user: IUser = {
    _id: '',
    firstName: 'Guest',
    lastName: '',
    email: '',
    password: '',
    cartItems: []
  };

  constructor(private http: HttpClient) {}

  getUser() {
    this.http.get<IUser>(this.serverUrl + '/user').subscribe(
      data => {
        this.user = data;
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.log(error);
          }
        }
      }
    );
  }

  getUserById(uid): Observable<IUser> {
    return this.http.get<IUser>(this.serverUrl + '/userById', {
      params: { id: uid }
    });
  }
}
