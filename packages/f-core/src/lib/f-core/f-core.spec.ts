import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FCore } from './f-core';

describe('FCore', () => {
  let component: FCore;
  let fixture: ComponentFixture<FCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FCore],
    }).compileComponents();

    fixture = TestBed.createComponent(FCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
