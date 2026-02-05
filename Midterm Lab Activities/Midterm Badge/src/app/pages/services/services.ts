import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Data, Post } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  searchTerm$ = new BehaviorSubject<string>(''); // reactive search term
  posts$!: Observable<Post[]>;
  filteredPosts$!: Observable<Post[]>;

  constructor(private data: Data) {
    // Initialize posts$ inside constructor
    this.posts$ = this.data.getPosts();

    // Combine posts$ and searchTerm$ to filter posts
    this.filteredPosts$ = combineLatest([this.posts$, this.searchTerm$]).pipe(
      map(([posts, searchTerm]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
