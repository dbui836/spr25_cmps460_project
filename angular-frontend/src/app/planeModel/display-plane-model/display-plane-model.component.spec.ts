import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlaneModelComponent } from './display-plane-model.component';

describe('DisplayPlaneModelComponent', () => {
  let component: DisplayPlaneModelComponent;
  let fixture: ComponentFixture<DisplayPlaneModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPlaneModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPlaneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
