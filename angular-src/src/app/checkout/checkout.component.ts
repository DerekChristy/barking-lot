import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../services/pets.service';
import { IPets } from '../pets';
import { async } from 'q';

declare var paypal;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  dogId = '';
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
  constructor(private route: ActivatedRoute, private dogService: PetsService) {}

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  ngOnInit() {
    this.dogId = this.route.snapshot.paramMap.get('id');
    this.dogService.getPet(this.dogId).subscribe(
      data => {
        this.dog = data;
      },
      error => {
        console.log(error);
      }
    );

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.dog.breed,
                amount: {
                  currency_code: 'INR',
                  value: this.dog.amount
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
