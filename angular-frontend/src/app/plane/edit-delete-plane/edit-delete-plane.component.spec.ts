import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePlaneComponent } from './edit-delete-plane.component';

describe('EditDeletePlaneComponent', () => {
  let component: EditDeletePlaneComponent;
  let fixture: ComponentFixture<EditDeletePlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeletePlaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeletePlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
