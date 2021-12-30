import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { IProperty } from './IProperty.interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties: IProperty[] = [];

  constructor(private service: HousingService) {}

  ngOnInit(): void {
    this.service.getFakeProperties().subscribe((data: IProperty[]) => {
      this.properties = data;
    });
  }
}
