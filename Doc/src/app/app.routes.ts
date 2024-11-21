import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent }
];
