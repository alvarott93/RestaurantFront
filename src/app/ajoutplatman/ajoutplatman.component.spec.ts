import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutplatmanComponent } from './ajoutplatman.component';

describe('AjoutplatmanComponent', () => {
  let component: AjoutplatmanComponent;
  let fixture: ComponentFixture<AjoutplatmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutplatmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutplatmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
