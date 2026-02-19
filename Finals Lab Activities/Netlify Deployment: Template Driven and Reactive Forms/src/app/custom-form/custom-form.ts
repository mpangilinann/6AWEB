import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomForm {
  feedbackForm: FormGroup;
  categories = ['Bug Report', 'Feature Request', 'General Inquiry'];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      contactPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      priority: ['Low', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      message: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Custom Form Data:', this.feedbackForm.value);
      alert('Support Ticket Created!');
      this.feedbackForm.reset({priority: 'Low'});
    } else {
      this.feedbackForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string) {
    const control = this.feedbackForm.get(controlName);
    return control?.touched && control?.invalid;
  }
}
