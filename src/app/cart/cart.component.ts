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

  increaseQutty(index:number): void{
    this.cartService.onIncreaseQutty(index);
    this.calcTotal();
  }

  decreaseQutty(index:number): void{
    this.cartService.onDecreaseQutty(index);
    this.calcTotal();
  }

  deleteItem(index:number): void{
    this.cartService.onDeleteItem(index);
    this.calcTotal();
  }

  calcTotal(): void{
    this.total = this.cartService.getTotal()
  }


}
