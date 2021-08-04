import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersionerInputComponent } from './persioner-input.component';

describe('PersionerInputComponent', () => {
  let component: PersionerInputComponent;
  let fixture: ComponentFixture<PersionerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersionerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersionerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
