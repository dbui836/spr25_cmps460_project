import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePlaneModelComponent } from './edit-delete-plane-model.component';

describe('EditDeletePlaneModelComponent', () => {
  let component: EditDeletePlaneModelComponent;
  let fixture: ComponentFixture<EditDeletePlaneModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeletePlaneModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeletePlaneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
