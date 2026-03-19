import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputNumber } from './f-input-number';

describe('FInputNumber', () => {
  let component: FInputNumber;
  let fixture: ComponentFixture<FInputNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
