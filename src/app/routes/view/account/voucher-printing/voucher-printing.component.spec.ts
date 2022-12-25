import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPrintingComponent } from './voucher-printing.component';



describe('VoucherPrintingComponent', () => {
  let component: VoucherPrintingComponent;
  let fixture: ComponentFixture<VoucherPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




