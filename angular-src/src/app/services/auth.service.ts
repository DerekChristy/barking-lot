import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = '/api/register';
  private loginUrl = '/api/login';
  private userUrl = '/api/user';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  getUser() {
    return this.http.get(this.userUrl);
  }

  logout() {
    this.userService.user = {
      _id: '',
      firstName: 'Guest',
      lastName: '',
      email: '',
      password: '',
      cartItems: []
    };
    localStorage.removeItem('token');
    this.router.navigate(['/products']);
  }

  loggedIn(): boolean {
    // let veified = false;
    // this.http.get<any>(this.verifyUrl).subscribe(
    //   data => {
    //     console.log(data);
    //     veified = true;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // if (veified) {
    //   return true;
    // } else {
    //   return false;
    // }
    return !!localStorage.getItem('token'); // !! to return boolean
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
