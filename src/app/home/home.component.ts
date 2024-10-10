import { Component } from '@angular/core';
import {AnimalModel} from '../shared/animal.model';
import {animal} from '../shared/animal';
import { CartService } from '../cart.service';

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
    alert("the item added to your cart");}
}
