import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AnimalModel} from '../shared/animal.model';
import {animal} from '../shared/animal';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  animal:AnimalModel;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
   let id = parseInt(this.route.snapshot.params['id']);
   this.animal = animal[id]; 
  }
 
  addToCart(){
    this.cartService.onAddToCart(this.animal);
    alert("the item added to your cart");
  }

}
