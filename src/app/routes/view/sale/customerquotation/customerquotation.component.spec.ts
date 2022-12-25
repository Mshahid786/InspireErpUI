import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerquotationComponent } from './customerquotation.component';

describe('CustomerquotationComponent', () => {
  let component: CustomerquotationComponent;
  let fixture: ComponentFixture<CustomerquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
