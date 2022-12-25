import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmanagmentComponent } from './assetmanagment.component';

describe('AssetmanagmentComponent', () => {
  let component: AssetmanagmentComponent;
  let fixture: ComponentFixture<AssetmanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
