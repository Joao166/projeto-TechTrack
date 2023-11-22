import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologieSectionComponent } from './tecnologie-section.component';

describe('TecnologieSectionComponent', () => {
  let component: TecnologieSectionComponent;
  let fixture: ComponentFixture<TecnologieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologieSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
