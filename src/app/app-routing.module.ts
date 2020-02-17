import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./slash/slash.module').then(m => m.SlashModule) },
  {
    path: 'presentations',
    loadChildren: () => import('./presentations/presentations.module').then(m => m.PresentationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
