import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FSelect } from './f-select';

describe('FSelect', () => {
  let component: FSelect;
  let fixture: ComponentFixture<FSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(FSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
