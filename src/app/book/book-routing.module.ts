import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from '../share/layout/layout.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookViewComponent} from './book-view/book-view.component';


const routes: Routes = [
  {
    path: 'books',
    component: LayoutComponent,
    children: [
      { path: '', component: BookListComponent},
      { path: 'create', component: BookCreateComponent},
      { path: 'edit/:id', component: BookEditComponent},
      { path: 'view/:id', component: BookViewComponent},
      { path: 'delete/:id', component: BookDeleteComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
