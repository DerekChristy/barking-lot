import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {
  public pets = [];
  constructor(
    private petsService: PetsService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.petsService.getPets().subscribe(
      data => (this.pets = data),
      error => {
        console.log(error);
      }
    );
    this.userService.getUser();
  }

  showDetails(pet) {
    this.router.navigate(['/products/', pet._id]);
  }
}
