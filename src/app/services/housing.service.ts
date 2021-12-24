import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
 
  constructor(private httpClient: HttpClient) { }

  getProperties(): Observable<any> {
    return this.httpClient.get('http://localhost:9000/api/properties');
  }
}
