import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { signal } from '@angular/core';
import { Photo } from './photo.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'http-client-demo';
  httpusers: User[] = [];
  photos = signal<Photo[]>([]);

  constructor(private httpClient: Httpclient) { }

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });


    // REQUIRED 2
    this.httpClient.getPhotosRemotely().subscribe((data) => {
      this.photos.set(data);
    });
  }


}