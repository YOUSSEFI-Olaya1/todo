import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LandingPage } from './landing.page';

describe('LandingPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LandingPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
