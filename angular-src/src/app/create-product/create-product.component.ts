import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { PetsService } from '../services/pets.service';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor(
    private dogService: PetsService,
    private router: Router,
    private userService: UserService
  ) {}

  imageUploaded = false;
  imageUrl;
  dogModel = new Dog();
  fileSelected = false;
  ngOnInit() {}

  onFileSelected(event) {
    const file = event.target.files[0];
    if (file != null) {
      this.fileSelected = true;
      this.dogService.uploadImage(file).subscribe(
        res => {
          console.log(res);
          this.dogModel.image = res.image;
          this.imageUploaded = true;
          this.fileSelected = false;
        },
        err => {
          console.log(err);
          this.fileSelected = false;
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']);
            }
            if (err.status === 500) {
              this.router.navigate(['/register']);
            }
          }
        }
      );

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    } else {
      console.log('No file selected');
      this.fileSelected = false;
    }
  }

  submit() {
    this.dogModel.user = this.userService.user._id;
    this.dogService.registerPet(this.dogModel).subscribe(
      data => {
        this.router.navigate([`/products/${data._id}`]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
