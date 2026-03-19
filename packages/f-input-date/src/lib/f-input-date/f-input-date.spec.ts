import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputDate } from './f-input-date';

describe('FInputDate', () => {
  let component: FInputDate;
  let fixture: ComponentFixture<FInputDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputDate],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
