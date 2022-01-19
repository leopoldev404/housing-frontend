import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.params.subscribe(
      params => {
        this.propertyId = +params['id'];
      }
    );
  }

  onSelectNext() {
    this.propertyId++;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
