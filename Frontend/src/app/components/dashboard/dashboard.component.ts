import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  //Variable declarations
  public bookList:any=[];

  constructor(private bookService:BookService,private router:Router){}

  ngOnInit(): void{
    this.loadBook();
  }
   
  //To get book list
  loadBook(){
    this.bookService.getBooks().subscribe(data=>{
      this.bookList= data['items'];
     })
  }

  //To delete book
  deleteBook(id:any){
    this.bookService.deleteBook(id).subscribe(data=>{
      this.loadBook();
    })
  }
  //Navigate to edit form
  editBook(isbn:any){
    this.router.navigate(['/edit-book/'+isbn]);
  }

}
