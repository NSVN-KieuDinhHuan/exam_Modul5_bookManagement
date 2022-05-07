import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
  });
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getBookById(id);
    });
  }
  getBookById(id) {
    this.bookService.getBookById(id).subscribe(bookBE => {
      this.book = bookBE;
      this.editFormControl.id.setValue(this.book.id);
      this.editFormControl.title.setValue(this.book.title);
      this.editFormControl.author.setValue(this.book.author);
      this.editFormControl.description.setValue(this.book.description);
    });
  }
  get editFormControl() {
    return this.bookForm.controls;
  }
  ngOnInit() {
  }
}
