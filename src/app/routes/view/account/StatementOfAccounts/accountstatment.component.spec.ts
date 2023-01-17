import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountstatmentComponent } from './accountstatment.component';

describe('AccountstatmentComponent', () => {
  let component: AccountstatmentComponent;
  let fixture: ComponentFixture<AccountstatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountstatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountstatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
