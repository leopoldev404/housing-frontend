import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from '../components/properties/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpClient: HttpClient) {}

  getProperties(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>(
      'http://localhost:9000/api/properties'
    );
  }

  getFakeProperties(): Observable<IProperty[]> {
    return this.httpClient.get<IProperty[]>('data/properties.json');
  }
}
