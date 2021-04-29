/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoadsnipComponent } from './loadsnip.component';

describe('LoadsnipComponent', () => {
  let component: LoadsnipComponent;
  let fixture: ComponentFixture<LoadsnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadsnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadsnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
