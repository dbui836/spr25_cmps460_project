import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSeatPageComponent } from './passenger-seat-page.component';

describe('PassengerSeatPageComponent', () => {
  let component: PassengerSeatPageComponent;
  let fixture: ComponentFixture<PassengerSeatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerSeatPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerSeatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
