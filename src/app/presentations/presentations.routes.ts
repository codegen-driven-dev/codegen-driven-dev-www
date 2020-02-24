import { Routes } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { Feb2020Component } from './feb2020-1/feb2020-1.component';

export const presentationRoutes: Routes = [
  {path: '', component: PresentationsComponent },
  {path: '2020-02', component: Feb2020Component }
];
