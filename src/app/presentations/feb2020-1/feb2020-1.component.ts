import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { SlidesComponent } from '../../slides/slides.component';

@Component({
  selector: 'app-feb2020-1',
  templateUrl: './feb2020-1.component.html',
  styleUrls: ['./feb2020-1.component.scss']
})
export class Feb2020Component extends SlidesComponent implements AfterContentInit {
  ngAfterContentInit() {
    this.totalSlides = 30;
  }
}
