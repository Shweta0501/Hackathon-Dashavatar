import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondvoucherComponent } from './diamondvoucher.component';

describe('DiamondvoucherComponent', () => {
  let component: DiamondvoucherComponent;
  let fixture: ComponentFixture<DiamondvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
