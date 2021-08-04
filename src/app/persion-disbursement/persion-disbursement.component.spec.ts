import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersionDisbursementComponent } from './persion-disbursement.component';

describe('PersionDisbursementComponent', () => {
  let component: PersionDisbursementComponent;
  let fixture: ComponentFixture<PersionDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersionDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersionDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
