import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PresentationsComponent } from './presentations.component';
import { presentationRoutes } from './presentations.routes';
import { NavbarModule } from '../navbar/navbar.module';
import { Feb2020Component } from './feb2020-1/feb2020-1.component';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PresentationsComponent, Feb2020Component],
  imports: [
    CommonModule, RouterModule.forChild(presentationRoutes), NavbarModule, SvgViewerModule, FlexLayoutModule
  ]
})
export class PresentationsModule {}
