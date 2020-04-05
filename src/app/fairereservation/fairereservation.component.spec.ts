import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairereservationComponent } from './fairereservation.component';

describe('FairereservationComponent', () => {
  let component: FairereservationComponent;
  let fixture: ComponentFixture<FairereservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairereservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
