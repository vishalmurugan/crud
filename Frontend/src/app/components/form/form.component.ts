import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ValidationService } from '@shared/services/validation.service';
import { BookService } from 'src/app/services/book.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //variable declaration
  public bookForm!:FormGroup;
  public isbn!:string;

  constructor(private formBuilder:FormBuilder,private bookService:BookService,private router:Router,private route:ActivatedRoute){
    this.isbn=this.route.snapshot.params['id'];
  }

  ngOnInit(): void{
     this.intialForm();
     if(this.isbn){
      this.viewBook();
     }
  }

  //To intialize Form
  intialForm(){
    this.bookForm=this.formBuilder.group({
      title:['',Validators.required],
      author:['',Validators.required],
      description:['',Validators.required],
      isbn:['',[Validators.required,ValidationService.isbnValidate]],
      year:['',Validators.required]
    })
}

//To get particular book detail
viewBook(){
  this.bookService.viewBook(this.isbn).subscribe(data=>{
    
    this.bookForm.patchValue(data['items'])
  })
}

//To get controls access from form group
get f(){
  return this.bookForm.controls;
}

//To handle form submit function
submitForm(){
  this.bookForm.markAllAsTouched();
  if(this.bookForm.valid){
    if(this.isbn){
      //Update API call
      this.bookService.updateBook(this.bookForm.value).subscribe(data=>{
        this.router.navigate(['/']);
      })
    }else{
    //Post API call
    this.bookService.createBook(this.bookForm.value).subscribe(data=>{
      this.router.navigate(['/']);
    })
  }
  }
}

}
