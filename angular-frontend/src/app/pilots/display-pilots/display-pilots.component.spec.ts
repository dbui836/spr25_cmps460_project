import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPilotsComponent } from './display-pilots.component';

describe('DisplayPilotsComponent', () => {
  let component: DisplayPilotsComponent;
  let fixture: ComponentFixture<DisplayPilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPilotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
