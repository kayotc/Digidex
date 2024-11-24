import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Digimon } from '../../services/api-digimon.service';
import { SendDetailsService } from '../../services/send-details.service';  // Importar o serviço
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  digimonData: any;
  digimonName = "";

  constructor(
    private service: Digimon,
    private rotas: Router,
    private sendDetailsService: SendDetailsService  
  ) {}

  goToChoice(){
    this.rotas.navigate(["choice"]);
  }

  goToTeam(){
    this.rotas.navigate(["team"]);
  }

  goToDetails(){
    this.sendDetailsService.setDigimonDetails(this.digimonData);
    this.rotas.navigate(["details"]);
  }

  searchDigimon(): void {
    if (this.digimonName) {
      this.service.getDigimonDatas(this.digimonName).subscribe((data => {
        this.digimonData = data;
        console.log(data);
      }));
    }
  }
  
}
