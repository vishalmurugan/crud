import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private ApiService:ApiService) { }

  /**
   * To create a new book
   */
   
  createBook = (data:any) => {
    return this.ApiService.post('/book/create',data).pipe(
      map((data:any) => {
        return data;
      })
    );
  };
   
   /**
   * To update a book
   */
   
   updateBook = (data:any) => {
    return this.ApiService.put('/book/update',data).pipe(
      map((data:any) => {
        return data;
      })
    );
  };

  /**
   * To get book list
   */
   
  getBooks = () => {
    return this.ApiService.get('/book/list').pipe(
      map((data:any) => {
        return data;
      })
    );
  };

  /**
   * To delete a book
   */
   
  deleteBook = (isbn:any) => {
    return this.ApiService.delete('/book/delete/'+isbn).pipe(
      map((data:any) => {
        return data;
      })
    );
  };
  
  /**
   * To view  book
   */
   
  viewBook = (isbn:any) => {
    return this.ApiService.get('/book/'+isbn).pipe(
      map((data:any) => {
        return data;
      })
    );
  };

}
