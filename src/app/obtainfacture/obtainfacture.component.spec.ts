import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainfactureComponent } from './obtainfacture.component';

describe('ObtainfactureComponent', () => {
  let component: ObtainfactureComponent;
  let fixture: ComponentFixture<ObtainfactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainfactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
