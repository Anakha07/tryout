import { Component, OnInit } from '@angular/core';
import  { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name: string ;
  public age:number;
  public email:string;
  public address:{
    street:string,
    city:string,
    zipcode:string
  }
  public hobbies:string[];
  public posts:Post[];
  public flag:boolean=false;

  constructor(private dataservice:DataService) {
   
   }

  ngOnInit() {
    this.name="JOHN DOE";
    this.age=20;
    this.address= {
      street:"MCousine",
      city:"California",
      zipcode:"CA"
    
  }
    this.email="doe123z"
    this.hobbies=['Coding','Gaming','Browsing'];
    this.dataservice.getPosts().subscribe((posts) => {this.posts=posts});
}
toggleEdit(flag){
  this.flag=!this.flag;
}
onClick(){
  console.log("Clicked");
}
addHobby(hobby){
  this.hobbies.unshift(hobby);
  return false;
}
delHobby(hobby){
  for(let i=0;i<this.hobbies.length;i++){
    if(this.hobbies[i]==hobby){
      this.hobbies.splice(i,1);
    }
  }

}
}
interface Post{
  title: string;
  id: number;
  body:string;

}