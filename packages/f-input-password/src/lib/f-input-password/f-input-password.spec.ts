import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputPassword } from './f-input-password';

describe('FInputPassword', () => {
  let component: FInputPassword;
  let fixture: ComponentFixture<FInputPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
