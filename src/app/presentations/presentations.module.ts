import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { presentationRoutes } from './presentations.routes';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [PresentationsComponent],
    imports: [
        CommonModule, RouterModule.forChild(presentationRoutes), NavbarModule
    ]
})
export class PresentationsModule {}
