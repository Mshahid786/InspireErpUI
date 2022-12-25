import { ProjectdescriptionComponent } from './projectdescription.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProjectdescriptionComponent', () => {
  let component: ProjectdescriptionComponent;
  let fixture: ComponentFixture<ProjectdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
