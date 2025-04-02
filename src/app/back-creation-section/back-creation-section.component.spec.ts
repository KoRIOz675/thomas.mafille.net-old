import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCreationSectionComponent } from './back-creation-section.component';

describe('BackCreationSectionComponent', () => {
  let component: BackCreationSectionComponent;
  let fixture: ComponentFixture<BackCreationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackCreationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackCreationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
