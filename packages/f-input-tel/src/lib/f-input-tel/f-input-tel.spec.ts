import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputTel } from './f-input-tel';

describe('FInputTel', () => {
  let component: FInputTel;
  let fixture: ComponentFixture<FInputTel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputTel],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputTel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
