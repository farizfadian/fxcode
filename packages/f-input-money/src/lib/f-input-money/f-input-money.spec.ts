import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputMoney } from './f-input-money';

describe('FInputMoney', () => {
  let component: FInputMoney;
  let fixture: ComponentFixture<FInputMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputMoney],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputMoney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
