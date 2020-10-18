import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExProjectComponent } from './ex-project.component';

describe('ExProjectComponent', () => {
  let component: ExProjectComponent;
  let fixture: ComponentFixture<ExProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
