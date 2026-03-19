import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FInputFile } from './f-input-file';

describe('FInputFile', () => {
  let component: FInputFile;
  let fixture: ComponentFixture<FInputFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputFile],
    }).compileComponents();

    fixture = TestBed.createComponent(FInputFile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
