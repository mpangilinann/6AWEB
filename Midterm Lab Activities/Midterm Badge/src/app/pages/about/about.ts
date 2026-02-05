import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, DatePipe],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  today = new Date();

}
