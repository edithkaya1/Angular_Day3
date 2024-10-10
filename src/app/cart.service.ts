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

  onIncreaseQutty(index: number): void{
    this.cartItems[index].quantity ++;
  }

  onDecreaseQutty(index: number): void{
    if(this.cartItems[index].quantity > 0){
        this.cartItems[index].quantity --;
    }else{
      this.cartItems[index].quantity=1; 
      this.cartItems.splice(index, 1)
    }  
  }

  onDeleteItem(index:number): void{
    this.cartItems[index].quantity=1;
    this.cartItems.splice(index, 1)
  }

}
