import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RegistryPage } from './registry.page';

describe('RegistryPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegistryPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
