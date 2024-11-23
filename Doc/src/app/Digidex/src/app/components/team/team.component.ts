import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  constructor(private router: Router){

  }
  goMain(): void {
    this.router.navigate(['/main']); 
  }
}
