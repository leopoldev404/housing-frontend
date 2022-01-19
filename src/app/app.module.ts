import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { RentPropertyComponent } from './components/rent-property/rent-property.component';

const appRoutes: Routes = [
  { path: '', component: PropertiesComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertiesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertiesComponent,
    AddPropertyComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
