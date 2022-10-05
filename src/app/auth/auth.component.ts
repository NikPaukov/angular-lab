import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, PasswordValidation.isShort]);
  usernameControl = new FormControl('', [Validators.required])
  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
  }

}

export class PasswordValidation {
  static isShort(control: AbstractControl): ValidationErrors | null {
    if ((control.value.length) < 8) {
      return {
        short: true
      };
    }
    else {
      return null;
    }
  }
}
