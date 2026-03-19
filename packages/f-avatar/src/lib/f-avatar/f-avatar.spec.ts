import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FAvatar } from './f-avatar';

describe('FAvatar', () => {
  let component: FAvatar;
  let fixture: ComponentFixture<FAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(FAvatar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
