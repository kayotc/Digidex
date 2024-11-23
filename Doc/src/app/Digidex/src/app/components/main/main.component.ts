import { CommonModule } from '@angular/common';
import { Attribute, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Digimon } from '../../services/api-digimon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
    digimonData: any;
    digimonName = "";


    constructor(private service: Digimon,private router: Router) {}

    searchDigimon(): void{
      
      if(this.digimonName){
        this.service.getDigimonDatas(this.digimonName).subscribe((data => {
          this.digimonData = data;
          console.log(data)
          
        }))
      }
    }
    goTeam(): void {
      this.router.navigate(['/team']);
    }


}
