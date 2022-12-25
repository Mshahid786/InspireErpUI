import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankguaranteeComponent } from './bankguarantee.component';

describe('BankguaranteeComponent', () => {
  let component: BankguaranteeComponent;
  let fixture: ComponentFixture<BankguaranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankguaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankguaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
