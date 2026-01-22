import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class Httpclient {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  // REQUIRED 2
  getPhotosRemotely(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map(photos => photos.slice(0, 5))
      );
  }
}