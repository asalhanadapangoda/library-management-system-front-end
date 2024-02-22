import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-viwe-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './viwe-all-books.component.html',
  styleUrl: './viwe-all-books.component.css'
})
export class ViweAllBooksComponent implements OnInit {
  private http;
  public bookList:any ={};
  public selectedBook :any;

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
}
