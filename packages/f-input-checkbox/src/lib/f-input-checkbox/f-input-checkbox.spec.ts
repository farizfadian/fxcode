import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputCheckbox } from './f-input-checkbox';

describe('FInputCheckbox', () => {
  let component: FInputCheckbox;
  let fixture: ComponentFixture<FInputCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
