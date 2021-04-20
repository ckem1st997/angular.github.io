/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KkkComponent } from './kkk.component';

describe('KkkComponent', () => {
  let component: KkkComponent;
  let fixture: ComponentFixture<KkkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KkkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
