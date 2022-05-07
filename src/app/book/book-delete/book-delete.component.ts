import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
declare var $: any;
declare var swal: any;
@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})

export class BookDeleteComponent implements OnInit {

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.deleteBookByid(id);
    });
  }

  ngOnInit() {
  }
  deleteBookByid(id) {
    const thisBookService = this.bookService;
    const thisRouter = this.router;
    swal({
      title: ' bạn chắc chắn không?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'có, xóa file!',
      cancelButtonText: 'không, hủy bỏ!',
      confirmButtonClass: 'btn btn-success margin-5',
      cancelButtonClass: 'btn btn-danger margin-5',
      buttonsStyling: false
    }).then(
      // tslint:disable-next-line:only-arrow-functions
      function(choice) {
        if (choice.value) {
          thisBookService.deleteBook(id).subscribe(() => {
            thisRouter.navigateByUrl('/books');
          }, error => console.log(error));
          swal(
            'Đã Xóa!',
            'Thành công',
          );
        }
        if (choice.dismiss === 'cancel') {
          thisRouter.navigateByUrl('/books');
          swal(
            'Dữ liệu của bạn đã được an toàn',
          );
        }
      });
  }
}
