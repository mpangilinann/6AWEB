import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
  providers: [DatePipe],
})
export class Register {
  // Data Model Properties
  userName = '';
  email = '';
  password = '';
  gender = '';
  address = '';
  birthDate!: Date;
  angularSkillLevel = 5;
  country = '';
  subscribe = false;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  countries: string[] = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'India'];

  // Reactive Form Structure
  formdata = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country: new FormControl('', [Validators.required]),
    subscribe: new FormControl(false),
    agreeTerms: new FormControl(false, [Validators.requiredTrue]), // Must be checked
  });

  onClickSubmit(data: any) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;
    this.country = data.country;
    this.subscribe = data.subscribe;

    if (this.formdata.valid) {
      console.log('Form Submitted!', this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}
