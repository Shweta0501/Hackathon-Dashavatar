import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodvoucherComponent } from './foodvoucher.component';

describe('FoodvoucherComponent', () => {
  let component: FoodvoucherComponent;
  let fixture: ComponentFixture<FoodvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
