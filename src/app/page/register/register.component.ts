import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

private http;
public countryList:any;
public selectedCountry:any;
public isExistUser:any;
public selectedCountryCode:any;
public userObj={
 firstName:null,
 lastName:null,
 userName:null,
 email:null,
 address:null,
 address2:null,
 country:null,
 phoneNumber:null
}

constructor(private httpCliant:HttpClient){
  this.http=httpCliant;
}
  ngOnInit(): void {
   this.loadCountries();
}
loadCountries(){
  let api= "https://restcountries.com/v3.1/all";
  this.http.get(api).subscribe(res =>{
    this.countryList=res;
    console.log(res);
  });
}
setSlectedCountry(country:any){
this.selectedCountry=country;
this.selectedCountryCode=country.idd.root+""+country.idd.suffixes[0];
  console.log(this.selectedCountryCode);
}
submitFrom(){
 console.log(this.userObj);
 this.http.get(`http://localhost:8080/user/is-Exists-User/${this.userObj.userName}`).subscribe(data=>{
  console.log(data);
  this.isExistUser=data;
  this.registerUser(this.isExistUser)
 })
}
registerUser(isExistUser:any){
if(!isExistUser==true){
  this.http.post("http://localhost:8080/user/add-user",this.userObj).subscribe(data=>{
    alert(this.userObj.userName + " has been registered!");

  })
}else{
  alert(this.userObj.userName + " has been already taken !");
}
}
}
