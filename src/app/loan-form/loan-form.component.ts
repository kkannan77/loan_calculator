import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HandleLoanService } from '../services/handle-loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'],
})
export class LoanFormComponent implements OnInit {
  checkoutForm!: FormGroup;
  submitted = false;
  success = false;
  loanDetails: any = [];
  errorDetails: any = [];
  currency: string = 'SEK';

  childrens = ['NONE', 'SINGLE', 'MULTIPLE'];
  coapplicants = ['NONE', 'SINGLE_BORROWER', 'MULTIPLE_BORROWERS'];

  constructor(
    private formBuilder: FormBuilder,
    private handleLoanService: HandleLoanService
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      monthlyIncome: [null, [Validators.required, Validators.min(500000)]],
      requestedAmount: [null, [Validators.required, Validators.min(20000000)]],
      loanTerm: [null, [Validators.required, Validators.max(360)]],
      children: ['', Validators.required],
      coapplicant: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.checkoutForm.controls;
  }

  // Submit action - Show the loan detail to confirm
  onSubmit() {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      return;
    }
  }

// Confirm action - Invoke the api end point and handle the error / success response
  confirm() {
    const apiEndPoint: string = '/api/loan';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': 'swb-222222',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }),
    };

    // invoke the api end point - using handleLoanService
    return this.handleLoanService
      .getLoanInterest(apiEndPoint, this.checkoutForm.value, httpOptions)
      .subscribe(
        (result) => {
          this.loanDetails = result;
          this.success = true;
        },
        (response) => {
          this.errorDetails = response.error.fields;
          this.loanDetails = [];
          this.handleFormValidation();
        }
      );
  }

  // Handle the api error response and attach the errors with the respective fields
  handleFormValidation() {
    this.submitted = false;
    this.success = false;

    if (this.errorDetails) {
      for (let errDetail of this.errorDetails) {
        console.log(errDetail.params, ' - ', errDetail.message);
        this.checkoutForm.controls[errDetail.params].setErrors({
          incorrect: errDetail.message,
        });
      }
    }
  }
}
