import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../services/notification/notification.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
  });
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private notificationSevice: NotificationService) {

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
  submit() {
    this.bookService.editBook(this.book.id, this.bookForm.value).subscribe(() => {
      this.notificationSevice.showMessage('success', 'chỉnh sửa thành công!');
      this.router.navigateByUrl('/books');
    }, error => this.notificationSevice.showMessage('error', 'chỉnh sửa thất bại!'));
  }
}
