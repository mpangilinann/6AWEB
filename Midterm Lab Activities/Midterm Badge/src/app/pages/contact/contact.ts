import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {

  name = '';
  email = '';
  message = '';

}
