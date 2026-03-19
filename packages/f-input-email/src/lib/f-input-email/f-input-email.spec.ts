import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputEmail } from './f-input-email';

describe('FInputEmail', () => {
  let component: FInputEmail;
  let fixture: ComponentFixture<FInputEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
