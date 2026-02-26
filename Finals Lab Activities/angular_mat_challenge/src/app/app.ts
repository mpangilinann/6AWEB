import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Add RouterLink here
import { MatToolbarModule } from '@angular/material/toolbar'; // Add this
import { MatButtonModule } from '@angular/material/button';   // Add this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,        // Needed for routerLink in HTML
    MatToolbarModule,  // Needed for <mat-toolbar>
    MatButtonModule    // Needed for <button mat-button>
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
