import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSeatPageComponent } from './flight-seat-page.component';

describe('FlightSeatPageComponent', () => {
  let component: FlightSeatPageComponent;
  let fixture: ComponentFixture<FlightSeatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSeatPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSeatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
