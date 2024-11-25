import { Routes} from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DetailsComponent } from './components/details/details.component';



export const routes: Routes = [


    {path: "main", component: ChoiceComponent},

    {path: "team", component: TeamComponent},

    {path: "details", component: DetailsComponent},

    {path: '', redirectTo: '/choice', pathMatch: 'full'},

    {path: '**', component: ChoiceComponent}

];


