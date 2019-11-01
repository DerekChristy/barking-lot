import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from '../services/pets.service';
import { UserService } from '../services/user.service';
import { IUser } from '../IUser';
import { IPets } from '../pets';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public dog: IPets = {
    user: '',
    breed: '',
    sex: '',
    image: '',
    dob: 0,
    street: '',
    city: '',
    state: '',
    pincode: 0,
    amount: 0
  };
  dogId = 'unknown';
  user: IUser = {
    _id: '',
    firstName: 'Guest',
    lastName: '',
    email: '',
    password: '',
    cartItems: []
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petsService: PetsService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.dogId = this.route.snapshot.paramMap.get('id');
    this.petsService.getPet(this.dogId).subscribe(
      data => {
        this.dog = data;
        this.userService.getUserById(data.user).subscribe(
          user => {
            this.user = user;
            console.log(user);
          },
          err => {
            console.log(err);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
    this.userService.getUser();
  }

  buy() {
    this.router.navigate(['/checkout/', this.dogId]);
  }
  unFav() {
    // TODO not cart Itens FavItems
    // const index = this.cartItems.indexOf(this.dog._id);
    // if (index > -1) {
    //   this.cartItems.splice(index, 1);
    //   this.user.updateCart(this.cartItems);
    // }
  }

  addFav() {
    // this.cartItems.push(this.dog._id);
    // this.user.updateCart(this.cartItems);
  }
}
