import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBeforeLoginComponent } from './button-before-login.component';

describe('ButtonBeforeLoginComponent', () => {
  let component: ButtonBeforeLoginComponent;
  let fixture: ComponentFixture<ButtonBeforeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBeforeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
