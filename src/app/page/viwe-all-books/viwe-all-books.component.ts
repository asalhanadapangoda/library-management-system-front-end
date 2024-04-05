import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../common/nav/nav.component";


@Component({
    selector: 'app-viwe-all-books',
    standalone: true,
    templateUrl: './viwe-all-books.component.html',
    styleUrl: './viwe-all-books.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavComponent]
})
export class ViweAllBooksComponent implements OnInit {
  private http;
  public bookList:any ={};
  public selectedBook :any;
  public newBook:any={
    "isbn":null,
    "title":null,
    "author":null,
    "category":null,
    "qty":null
  }
  public fineBook:any={};


  constructor(private httpCliant:HttpClient){
    this.http=httpCliant;
  }
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks(){
    this.http.get('http://localhost:8080/book/getBook').subscribe((data)=>{
      this.bookList=data;
      console.log(this.bookList);
    })
  }
  deleteBook(){
    this.http.delete(`http://localhost:8080/book/${this.selectedBook.id}`,{responseType:'text'}).subscribe((response:string)=>{
      console.log(response);
      this.loadBooks();
      this.selectedBook=null;
      alert("Deleted");
    })
  }

  setSelectedBook(book:any){
    this.selectedBook=book;
  }

  saveBook(){
    let postApi = "http://localhost:8080/book/add";
    this.http.post(postApi,this.selectedBook).subscribe(data=>{
      console.log("Saved");
      this.loadBooks();
      this.selectedBook=null;
      alert("Updated");
    })
  }

  addBook(){
    let postApi = "http://localhost:8080/book/add";
    this.http.post(postApi,this.newBook).subscribe(data=>{
      console.log("Saved");
      this.loadBooks();
    })
  }

  searchBook(){
    this.http.get(`http://localhost:8080/book/search/${this.fineBook.id}`).subscribe((data)=>{
      this.fineBook=data;
      console.log(this.newBook);
      this.fineBook.id=null;
    })
  }
}
