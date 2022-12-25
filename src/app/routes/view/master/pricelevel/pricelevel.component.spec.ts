import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricelevelComponent } from './pricelevel.component';

describe('PricelevelComponent', () => {
  let component: PricelevelComponent;
  let fixture: ComponentFixture<PricelevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
