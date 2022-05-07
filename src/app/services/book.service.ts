import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/Book';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  getBookById(id): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  createBook(book): Observable<Book> {
    return this.http.post(`${API_URL}/books`, book);
  }

  editBook(id, book): Observable<Book> {
    return this.http.put(`${API_URL}/books/${id}`, book);
  }

  deleteBook(id): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }



}
