import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TeamComponent } from './components/team/team.component';


export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'main', component: MainComponent},
    {path: 'team', component: TeamComponent}

];


