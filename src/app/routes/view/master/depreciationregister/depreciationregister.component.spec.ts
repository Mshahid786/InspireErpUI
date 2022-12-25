import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciationregisterComponent } from './depreciationregister.component';

describe('DepreciationregisterComponent', () => {
  let component: DepreciationregisterComponent;
  let fixture: ComponentFixture<DepreciationregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepreciationregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepreciationregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
