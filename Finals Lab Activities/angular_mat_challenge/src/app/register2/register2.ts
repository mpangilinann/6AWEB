import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
// New Imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule,
    MatCardModule, MatRadioModule, MatSliderModule, MatCheckboxModule, MatSelectModule,
    MatDividerModule, MatToolbarModule, MatChipsModule, MatTooltipModule, MatIconModule,
    MatStepperModule, MatExpansionModule, MatBadgeModule
  ],
  templateUrl: './register2.html',
  styleUrl: './register2.css'
})
export class Register2 {
  maxDate = new Date(2006, 11, 31);
  passwordPattern = "^[a-zA-Z][a-zA-Z0-9]{7,}$";
  interests: string[] = ['AI', 'Web Dev', 'Cybersecurity', 'Cloud'];

  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    country: new FormControl('', Validators.required),
    gender: new FormControl('male'),
    birthDate: new FormControl(null, Validators.required),
    angularSkillLevel: new FormControl(5),
    darkMode: new FormControl(false)
  });

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    const isDark = this.formdata.get('darkMode')?.value;
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  onClickSubmit() {
    if (this.formdata.valid) {
      alert('Lab 5 Challenge Submitted Successfully!');
      console.log(this.formdata.value);
    }
  }
}
