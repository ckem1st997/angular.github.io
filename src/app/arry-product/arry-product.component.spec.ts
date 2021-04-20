/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArryProductComponent } from './arry-product.component';

describe('ArryProductComponent', () => {
  let component: ArryProductComponent;
  let fixture: ComponentFixture<ArryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
