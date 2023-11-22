import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationSectionComponent } from './occupation-section.component';

describe('OccupationSectionComponent', () => {
  let component: OccupationSectionComponent;
  let fixture: ComponentFixture<OccupationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
