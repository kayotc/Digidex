import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDetailsService {
  private digimonDetails: any;

  constructor() { }

  setDigimonDetails(data: any): void {
    this.digimonDetails = data;
  }
  
  getDigimonDetails(): any {
    return this.digimonDetails;
  }
}
