
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoaderPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

