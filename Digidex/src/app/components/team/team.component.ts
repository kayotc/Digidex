import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  constructor(private rotas: Router) {}

  goToChoice(){
    this.rotas.navigate(["choice"]);
  }

  goToHome() {
    this.rotas.navigate(["main"]);
  }

}
