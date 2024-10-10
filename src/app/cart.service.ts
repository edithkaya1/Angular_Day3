import { Injectable } from '@angular/core';
import {AnimalModel} from './shared/animal.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : AnimalModel[] = []

  constructor() { }

  getAnimals(){
    return this.cartItems
  }

  onAddToCart(buyAnimal:AnimalModel){
    const existingAnimal = this.cartItems.find((animal)=>
      {
        return animal === buyAnimal;
      }
   )
   if(!existingAnimal){
    this.cartItems.push(buyAnimal);
   }else{
    existingAnimal.quantity ++
   }
   
    console.log(this.cartItems);
    
  }

  getTotal(){
    let total = 0;
    this.cartItems.forEach(ele =>{
      total += ele.quantity * ele.price;
    })
    return total;
  }
}
