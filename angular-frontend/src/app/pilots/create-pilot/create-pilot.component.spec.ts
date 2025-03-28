import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePilotComponent } from './create-pilot.component';

describe('CreatePilotComponent', () => {
  let component: CreatePilotComponent;
  let fixture: ComponentFixture<CreatePilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
