import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputSearch } from './f-input-search';

describe('FInputSearch', () => {
  let component: FInputSearch;
  let fixture: ComponentFixture<FInputSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
