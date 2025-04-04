import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneModelPageComponent } from './plane-model-page.component';

describe('PlaneModelPageComponent', () => {
  let component: PlaneModelPageComponent;
  let fixture: ComponentFixture<PlaneModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaneModelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
