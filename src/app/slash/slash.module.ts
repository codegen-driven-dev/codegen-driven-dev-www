import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    FlexLayoutModule, SvgViewerModule, NavbarModule, FooterModule
  ]
})
export class SlashModule {
}
