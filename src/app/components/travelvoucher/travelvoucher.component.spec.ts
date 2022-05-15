import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelvoucherComponent } from './travelvoucher.component';

describe('TravelvoucherComponent', () => {
  let component: TravelvoucherComponent;
  let fixture: ComponentFixture<TravelvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
