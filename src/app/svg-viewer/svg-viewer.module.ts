import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SvgViewerComponent } from './svg-viewer.component';

@NgModule({ declarations: [SvgViewerComponent],
    exports: [SvgViewerComponent], imports: [CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SvgViewerModule {
}
