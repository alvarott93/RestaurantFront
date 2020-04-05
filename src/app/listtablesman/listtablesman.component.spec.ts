import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtablesmanComponent } from './listtablesman.component';

describe('ListtablesmanComponent', () => {
  let component: ListtablesmanComponent;
  let fixture: ComponentFixture<ListtablesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtablesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtablesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
