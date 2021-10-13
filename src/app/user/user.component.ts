import { Restaurant } from './../user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  ngOnInit(): void {
    this.getUserData()
  }


  restaurants: Restaurant[]=[];
  constructor(private http:HttpClient) { }

  getUserData(){
    this.http.get<any>("https://foodbukka.herokuapp.com/api/v1/restaurant/").subscribe(
      (response)=>{
       this.restaurants= response.Result
        console.log("RESPONSE :",response)
      },(error)=>{
        console.log("ERROR :",error.message);
        
      }
    )
  }
    
 
}
