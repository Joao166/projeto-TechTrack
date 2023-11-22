import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAboutComponent } from './learn-about.component';

describe('LearnAboutComponent', () => {
  let component: LearnAboutComponent;
  let fixture: ComponentFixture<LearnAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
