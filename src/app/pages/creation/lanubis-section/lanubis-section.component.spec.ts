import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanubisSectionComponent } from './lanubis-section.component';

describe('LanubisSectionComponent', () => {
  let component: LanubisSectionComponent;
  let fixture: ComponentFixture<LanubisSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanubisSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanubisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
