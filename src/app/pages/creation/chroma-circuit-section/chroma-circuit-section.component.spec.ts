import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaCircuitSectionComponent } from './chroma-circuit-section.component';

describe('ChromaCircuitSectionComponent', () => {
  let component: ChromaCircuitSectionComponent;
  let fixture: ComponentFixture<ChromaCircuitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChromaCircuitSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaCircuitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
