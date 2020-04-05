import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusersmanComponent } from './listusersman.component';

describe('ListusersmanComponent', () => {
  let component: ListusersmanComponent;
  let fixture: ComponentFixture<ListusersmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListusersmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListusersmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
