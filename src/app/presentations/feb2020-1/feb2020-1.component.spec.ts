import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2020Component } from './feb2020-1.component';

describe('Feb2020_1_Component', () => {
  let component: Feb2020Component;
  let fixture: ComponentFixture<Feb2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feb2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
