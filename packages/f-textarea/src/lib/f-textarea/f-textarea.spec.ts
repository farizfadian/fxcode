import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FTextarea } from './f-textarea';

describe('FTextarea', () => {
  let component: FTextarea;
  let fixture: ComponentFixture<FTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTextarea],
    }).compileComponents();

    fixture = TestBed.createComponent(FTextarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
