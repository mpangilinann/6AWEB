import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],  // <-- add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'midterm_badge';
}
