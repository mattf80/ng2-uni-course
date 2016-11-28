/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WineEditComponent } from './wine-edit.component';

describe('WineEditComponent', () => {
  let component: WineEditComponent;
  let fixture: ComponentFixture<WineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
