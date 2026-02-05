import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Data, Post } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, TruncatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  posts$: Observable<Post[]>;

  constructor(private data: Data) {
    this.posts$ = this.data.getPosts();
  }
}


