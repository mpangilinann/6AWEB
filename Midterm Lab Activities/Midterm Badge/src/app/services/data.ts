import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class Data {

  private posts$!: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    if (!this.posts$) {
      this.posts$ = this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(shareReplay(1));
    }
    return this.posts$;
  }
}
