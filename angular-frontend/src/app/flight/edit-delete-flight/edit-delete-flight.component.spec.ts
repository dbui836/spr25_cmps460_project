import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteFlightComponent } from './edit-delete-flight.component';

describe('EditDeleteFlightComponent', () => {
  let component: EditDeleteFlightComponent;
  let fixture: ComponentFixture<EditDeleteFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
