import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { IUser } from './IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'barking-lot';
  user: IUser = {
    _id: '',
    firstName: 'Guest',
    lastName: '',
    email: '',
    password: '',
    cartItems: []
  };

  constructor(public auth: AuthService, public userService: UserService) {}
  ngOnInit() {
    this.userService.getUser();
  }

  logout() {
    this.auth.logout();
  }
}
