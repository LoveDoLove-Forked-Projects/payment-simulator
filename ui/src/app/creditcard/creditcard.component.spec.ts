import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreditcardComponent } from './creditcard.component';

describe('CreditcardComponent', () => {
  let component: CreditcardComponent;
  let fixture: ComponentFixture<CreditcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
