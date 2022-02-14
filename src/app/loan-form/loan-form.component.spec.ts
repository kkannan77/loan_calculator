import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { LoanFormComponent } from './loan-form.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [LoanFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form Element count', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#checkoutForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });

  it('check inital form values', () => {
    const loanFormGroup = component.checkoutForm;
    const loanFormValues = {
      monthlyIncome: '',
      requestedAmount: '',
      loanTerm: '',
      children: '',
      coapplicant: '',
    };
    expect(loanFormGroup.value).toEqual(loanFormValues);
  });

  it('check inital form values', () => {
    const loanFormGroup = component.checkoutForm;
    const loanFormValues = {
      monthlyIncome: '',
      requestedAmount: '',
      loanTerm: '',
      children: '',
      coapplicant: '',
    };
    expect(loanFormGroup.value).toEqual(loanFormValues);
  });


});
