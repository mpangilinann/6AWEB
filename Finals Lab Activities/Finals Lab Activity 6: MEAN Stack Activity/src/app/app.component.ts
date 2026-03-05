import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly APIUrl = 'http://localhost:5038/api/books/';
  books: any = [];

  // 5 Form variables
  newBook: string = '';
  newAuthor: string = '';
  newYear: string = '';
  newDesc: string = '';
  newPrice: string = '';
  editingBookId: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe((data) => {
      this.books = data;
    });
  }

  addOrUpdateBook() {
    const formData = new FormData();
    formData.append('title', this.newBook);
    formData.append('author', this.newAuthor);
    formData.append('year', this.newYear);
    formData.append('description', this.newDesc);
    formData.append('price', this.newPrice);

    if (this.editingBookId) {
      this.http.put(this.APIUrl + 'UpdateBook?id=' + this.editingBookId, formData)
        .subscribe((data) => {
          alert(data);
          this.resetForm();
          this.refreshBooks();
        });
    } else {
      this.http.post(this.APIUrl + 'AddBook', formData).subscribe((data) => {
        alert(data);
        this.resetForm();
        this.refreshBooks();
      });
    }
  }

  editBook(book: any) {
    this.editingBookId = book.id;
    this.newBook = book.title;
    this.newAuthor = book.author || '';
    this.newYear = book.year || '';
    this.newDesc = book.desc;
    this.newPrice = book.price.toString();
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe((data) => {
      alert(data);
      this.refreshBooks();
    });
  }

  resetForm() {
    this.editingBookId = null;
    this.newBook = '';
    this.newAuthor = '';
    this.newYear = '';
    this.newDesc = '';
    this.newPrice = '';
  }
}
