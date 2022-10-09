import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public isOpen1 = true;
  public isOpen2 = true;
  public isOpen3 = true;
  public isOpen4 = true;

  constructor() { }

  ngOnInit(): void {
  }

  open1(): void {
    if (this.isOpen1 == true) {
      this.isOpen1 = false;
    } else {
      this.isOpen1 = true;
    }
  }
  open2(): void {

    if (this.isOpen2 == true) {
      this.isOpen2 = false;
    } else {
      this.isOpen2 = true;
    }
  }

  open3(): void {
    
    if (this.isOpen3 == true) {
      this.isOpen3 = false;
    } else {
      this.isOpen3 = true;
    }

  }
  open4(): void { 
    if (this.isOpen4 == true) {
      this.isOpen4 = false;
    } else {
      this.isOpen4 = true;
    }

  }
  
}


