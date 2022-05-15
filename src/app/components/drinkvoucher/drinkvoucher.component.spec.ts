import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkvoucherComponent } from './drinkvoucher.component';

describe('DrinkvoucherComponent', () => {
  let component: DrinkvoucherComponent;
  let fixture: ComponentFixture<DrinkvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
