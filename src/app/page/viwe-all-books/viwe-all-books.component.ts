import { Component, OnInit } from '@angular/core';
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
}
