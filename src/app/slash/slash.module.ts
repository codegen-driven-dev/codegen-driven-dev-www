import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { slashRoutes } from './slash.routes';
import { SlashComponent } from './slash.component';


@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule.forChild(slashRoutes),
    FlexLayoutModule, MatCardModule,
    SvgViewerModule
  ]
})
export class SlashModule {}
