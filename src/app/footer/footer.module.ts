import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from 'ngx-flexible-layout';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SvgViewerModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
