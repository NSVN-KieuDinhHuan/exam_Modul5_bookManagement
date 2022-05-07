import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {NotificationService} from '../../services/notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router,
              private notificationSevice: NotificationService) {
  }

  ngOnInit() {
  }
  createBook(bookForm) {
    if (bookForm.valid) {
      this.bookService.createBook(bookForm.value).subscribe(() => {
        this.notificationSevice.showMessage('success', 'Tạo mới thành công!');
        this.router.navigateByUrl('/books');
      }, error => this.notificationSevice.showMessage('error', 'Thất bại!'));
    } else {
    }
  }
}
