import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendDetailsService } from '../../services/send-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  digimonDetails: any;

  constructor(private rotas: Router, private details: SendDetailsService) {

    this.digimonDetails= this.details.getDigimonDetails();
  }

  goToChoice(){
    this.rotas.navigate(["choice"]);
  }
  goToHome() {
    this.rotas.navigate(["main"]);
  }
  goToTeam(){
    this.rotas.navigate(["team"]);
  }



}
