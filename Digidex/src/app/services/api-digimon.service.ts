import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Digimon {
  private apiUrl = "https://digi-api.com/api/v1/digimon/"; 

  constructor(private client: HttpClient) {}

  
  getDigimonDatas(name: string): Observable<any> {
    const url = `${this.apiUrl}${name}`;  
    return this.client.get(url);
  }
  
}
