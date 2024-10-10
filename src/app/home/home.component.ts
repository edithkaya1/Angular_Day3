import { Component } from '@angular/core';
import {AnimalModel} from '../shared/animal.model';
import {animal} from '../shared/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  animals: AnimalModel[] = animal;

}
