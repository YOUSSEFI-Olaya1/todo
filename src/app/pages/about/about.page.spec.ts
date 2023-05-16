import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AboutPage } from './about.page';

describe('AboutPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
