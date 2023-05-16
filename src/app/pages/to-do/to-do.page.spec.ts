/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoPage } from './to-do.page';

describe('ToDoPage', () => {
  let component: ToDoPage;
  let fixture: ComponentFixture<ToDoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ToDoPage } from './to-do.page';

describe('ToDoPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToDoPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
