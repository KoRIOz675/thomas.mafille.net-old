import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahibaDesertSectionComponent } from './wahiba-desert-section.component';

describe('WahibaDesertSectionComponent', () => {
  let component: WahibaDesertSectionComponent;
  let fixture: ComponentFixture<WahibaDesertSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WahibaDesertSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WahibaDesertSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
