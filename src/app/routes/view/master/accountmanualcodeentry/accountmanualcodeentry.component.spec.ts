import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanualcodeentryComponent } from './accountmanualcodeentry.component';

describe('AccountmanualcodeentryComponent', () => {
  let component: AccountmanualcodeentryComponent;
  let fixture: ComponentFixture<AccountmanualcodeentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountmanualcodeentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmanualcodeentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
