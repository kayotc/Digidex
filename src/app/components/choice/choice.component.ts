import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Digimon } from '../../services/api-digimon.service';
import { SendDetailsService } from '../../services/send-details.service';  // Importar o serviço
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.scss'
})
export class ChoiceComponent {

  digimonData: any;
  digimonName = "";
  



  constructor(private rotas: Router,private sendDetailsService: SendDetailsService, private service: Digimon,  ) {}

  



  goToTeam(){
    this.rotas.navigate(["team"])
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
