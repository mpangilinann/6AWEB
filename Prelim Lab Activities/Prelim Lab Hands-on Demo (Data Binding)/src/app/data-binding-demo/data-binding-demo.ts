import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For two-way binding

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,        // <-- Make it standalone
  imports: [FormsModule],   // <-- Import FormsModule here if you use [(ngModel)]
  templateUrl: './data-binding-demo.html',
  styleUrls: ['./data-binding-demo.css']
})
export class DataBindingDemo {
  message = 'Data Binding Demonstration';
  title = "My First App!";
  description = "This is my new Angular Application";

  // For property binding example
  imageUrl = 'https://www.rollingstone.com/wp-content/uploads/2023/02/LeBron-James-Breaks-NBA-Scoring-Record.jpg?w=1581&h=1054&crop=1';
  w = 500;
  h = 500;
  altText = 'Lebron James';

  // For style/class binding
  textColor = 'blue';
  isHighlighted = true;

  // Two-way binding
  yourName = '';

  // Event binding
  count = 0;
  increment() { this.count++; }
  decrement() { this.count--; }
}
