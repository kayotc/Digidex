import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule
import { Hello } from '../../services/hello-world.service';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent], // Adicionando FormsModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  digimonData: any;
  digimonName: string = '';

  constructor(private service: Hello) {}

  searchDigimon(): void {
    if (this.digimonName) {
      this.service.getHelloWorld(this.digimonName).subscribe((data) => {
        console.log(data);
        this.digimonData = data;
      });
    } 
  }
}
