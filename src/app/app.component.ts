import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public infoMessage:string = "I am info message!";
 public infoBackground:string = "lightblue";
 public infoColor:string="black";

 public username:string='';

 public isClicked:boolean = false;

  constructor(){

  }

  public resetUsername(){
    this.username = '';
  }

  public toggleClick(){
    console.log(this.isClicked)
    this.isClicked = !this.isClicked;
  }
}
