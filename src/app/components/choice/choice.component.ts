import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.scss'
})
export class ChoiceComponent {

  confirme:boolean = false;

  constructor(private rotas: Router) {}

  goToHome(){
    this.rotas.navigate(['main'])
  }

  goToTeam(){
    this.rotas.navigate(["team"])
  }
  
  Confirmar(){
    this.confirme = !this.confirme;
  }
}
