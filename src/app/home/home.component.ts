import { Component } from '@angular/core';
import {AnimalModel} from '../shared/animal.model';
import {animal} from '../shared/animal';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  animals: AnimalModel[] = animal;

  constructor(private cartService:CartService){}

  addToCart(buyAnimal:AnimalModel): void{
    this.cartService.onAddToCart(buyAnimal);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your order has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    // alert("the item added to your cart");
    }
}
