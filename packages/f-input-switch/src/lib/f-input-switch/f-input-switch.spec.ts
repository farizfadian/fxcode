import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputSwitch } from './f-input-switch';

describe('FInputSwitch', () => {
  let component: FInputSwitch;
  let fixture: ComponentFixture<FInputSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
