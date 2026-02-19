import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html', // Check if your file is app.component.html or app.html
  styleUrl: './app.css'
})
export class AppComponent { // Make sure this is exported as AppComponent
  title = 'Angular_Forms';
}
