import { Component } from '@angular/core';
import {AnimalModel} from '../shared/animal.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  animalsFromCart: AnimalModel[];
  total: number;
  constructor(private cartService: CartService) {
    this.animalsFromCart = cartService.getAnimals();
    console.log(this.animalsFromCart);
    this.total = cartService.getTotal()
  }
}
