import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from 'ng-flex-layout';

import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { TheoryComponent } from './theory.component';
import { theoryRoutes } from './theory.routes';


@NgModule({
  declarations: [
    TheoryComponent
  ],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(theoryRoutes), FlexLayoutModule,

    NavbarModule, FooterModule,
  ]
})
export class TheoryModule {
}
