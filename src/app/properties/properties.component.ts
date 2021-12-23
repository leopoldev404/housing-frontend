import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties: any;

  constructor(private service: HousingService) {}

  ngOnInit(): void {
    this.service.getProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
