import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarModule } from '../navbar/navbar.module';
import { PreAlphaComponent } from './pre-alpha/pre-alpha.component';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { PresentationsComponent } from './presentations.component';
import { presentationRoutes } from './presentations.routes';


@NgModule({
  declarations: [PresentationsComponent, PreAlphaComponent],
  imports: [
    CommonModule, RouterModule.forChild(presentationRoutes),
    FlexLayoutModule,
    NavbarModule, SvgViewerModule
  ]
})
export class PresentationsModule {
}
