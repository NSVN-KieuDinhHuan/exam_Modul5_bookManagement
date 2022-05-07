import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor( private  bookservice: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookservice.getAll().subscribe((booksFromBE) => {
      this.books = booksFromBE;
    });
  }
}
