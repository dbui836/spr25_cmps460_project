import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAFlightPageComponent } from './book-a-flight-page.component';

describe('BookAFlightPageComponent', () => {
  let component: BookAFlightPageComponent;
  let fixture: ComponentFixture<BookAFlightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAFlightPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAFlightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
