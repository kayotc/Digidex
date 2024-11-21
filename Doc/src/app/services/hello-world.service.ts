import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Hello {
  private apiUrl = "https://digi-api.com/api/v1/digimon/"; // Base URL

  constructor(private client: HttpClient) {}

  // Agora aceita um nome de Digimon na URL
  getHelloWorld(name: string): Observable<any> {
    const url = `${this.apiUrl}${name}`;  // Concatena o nome na URL
    return this.client.get(url);
  }
}
