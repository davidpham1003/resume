import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResumeComponent } from './home-resume.component';

describe('HomeResumeComponent', () => {
  let component: HomeResumeComponent;
  let fixture: ComponentFixture<HomeResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
