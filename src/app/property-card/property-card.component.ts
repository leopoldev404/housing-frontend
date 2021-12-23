import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  Property: any = {
    id: "1",
    name: "ShitHouse",
    type: "Family House",
    price: "120.000"
  }
}
