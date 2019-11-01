import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: ''
  };
  showError = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token);

        // console.log(res.user);
        // localStorage.setItem('user', res.user._id);
        this.router.navigate(['/products']);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.showError = true;
          }
        }
      }
    );
  }
}
