import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePassengerComponent } from './edit-delete-passenger.component';

describe('EditDeletePassengerComponent', () => {
  let component: EditDeletePassengerComponent;
  let fixture: ComponentFixture<EditDeletePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeletePassengerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeletePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
