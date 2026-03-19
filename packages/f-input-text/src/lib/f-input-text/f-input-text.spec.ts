import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputText } from './f-input-text';

describe('FInputText', () => {
  let component: FInputText;
  let fixture: ComponentFixture<FInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputText],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
