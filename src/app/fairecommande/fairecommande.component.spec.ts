import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairecommandeComponent } from './fairecommande.component';

describe('FairecommandeComponent', () => {
  let component: FairecommandeComponent;
  let fixture: ComponentFixture<FairecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
