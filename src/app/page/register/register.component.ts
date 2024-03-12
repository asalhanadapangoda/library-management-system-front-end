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
  console.log(this.selectedCountry);
}
}
