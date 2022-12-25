import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesprocessingComponent } from './salesprocessing.component';

describe('SalesprocessingComponent', () => {
  let component: SalesprocessingComponent;
  let fixture: ComponentFixture<SalesprocessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesprocessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
