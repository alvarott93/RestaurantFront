import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplatsmanComponent } from './listplatsman.component';

describe('ListplatsmanComponent', () => {
  let component: ListplatsmanComponent;
  let fixture: ComponentFixture<ListplatsmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplatsmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplatsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
