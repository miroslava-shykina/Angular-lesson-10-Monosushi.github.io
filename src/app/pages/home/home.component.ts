import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public infoText = false;

  constructor() { }

  ngOnInit(): void {
  }

  infoTextClick():void{ 
   if(event){
if(this.infoText == true){
  this.infoText = false;
}else{
  this.infoText = true;
}
   
   }
  }

}
