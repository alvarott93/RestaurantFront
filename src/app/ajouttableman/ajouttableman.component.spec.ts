import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttablemanComponent } from './ajouttableman.component';

describe('AjouttablemanComponent', () => {
  let component: AjouttablemanComponent;
  let fixture: ComponentFixture<AjouttablemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouttablemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouttablemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
