import { Routes } from '@angular/router';
import { FilterComponent } from './pages/touristic/filter/filter.component';
import { CardComponent } from './pages/touristic/card/card.component';
import { ListComponent } from './pages/touristic/list/list.component';

export const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"details/:attractionId",component:CardComponent}
];
