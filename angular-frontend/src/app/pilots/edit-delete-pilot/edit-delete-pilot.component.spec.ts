import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePilotComponent } from './edit-delete-pilot.component';

describe('EditDeletePilotComponent', () => {
  let component: EditDeletePilotComponent;
  let fixture: ComponentFixture<EditDeletePilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeletePilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeletePilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
