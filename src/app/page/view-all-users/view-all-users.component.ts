import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-view-all-users',
    standalone: true,
    templateUrl: './view-all-users.component.html',
    styleUrl: './view-all-users.component.css',
    imports: [HttpClientModule,FormsModule,CommonModule,NavComponent]
})
export class ViewAllUsersComponent implements OnInit {
  
  public userList:any;
  public selectedUser:any={
    "id":null,
    "firstName":null,
    "lastName":null,
    "username":null,
    "email":null,
    "address":null,
    "address2":null,
    "country":null,
    "phoneNumber":null
  }

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.http.get("http://localhost:8081/user/get-all-users").subscribe((res:any)=>{
      this.userList=res;
      console.log(res);
    })
  }
  deleteUser(){
    this.http.delete(`http://localhost:8081/user/delete/${this.selectedUser.id}`,{responseType:'text'}).subscribe((response:string)=>{
      console.log(response);
      this.loadUsers();
      alert("Deleted");
    })
  }
  saveUser(){
    let postApi = "http://localhost:8081/user/add-user";
    this.http.post(postApi,this.selectedUser).subscribe(data=>{
      console.log("Saved");
      this.loadUsers();
      alert("Updated");
    })
  }

  setSelectedUser(user:any){
      this.selectedUser=user;
      console.log(this.selectedUser);
  }
}
