import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetchartComponent } from './assetchart.component';

describe('AssetchartComponent', () => {
  let component: AssetchartComponent;
  let fixture: ComponentFixture<AssetchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
