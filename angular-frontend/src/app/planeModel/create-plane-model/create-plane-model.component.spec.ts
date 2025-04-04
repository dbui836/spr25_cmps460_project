import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaneModelComponent } from './create-plane-model.component';

describe('CreatePlaneModelComponent', () => {
  let component: CreatePlaneModelComponent;
  let fixture: ComponentFixture<CreatePlaneModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaneModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
