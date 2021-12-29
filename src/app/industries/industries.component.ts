import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  public more:boolean = false;
  isReadMore1 = true;
  isReadMore2 = true;
  isReadMore3 = true;
  isReadMore4 = true;
  isReadMore5 = true;
  isReadMore6 = true;
  isReadMore7 = true;
  isReadMore8 = true;
  isReadMore9 = true;
  showText1(){
    this.isReadMore1 = !this.isReadMore1
  }
  showText2(){
    this.isReadMore2 = !this.isReadMore2
  }
  showText3(){
    this.isReadMore3 = !this.isReadMore3
  }
  showText4(){
    this.isReadMore4 = !this.isReadMore4
  }
  showText5(){
    this.isReadMore5 = !this.isReadMore5
  }
  showText6(){
    this.isReadMore6 = !this.isReadMore6
  }
  showText7(){
    this.isReadMore7 = !this.isReadMore7
  }
  showText8(){
    this.isReadMore8 = !this.isReadMore8
  }
  showText9(){
    this.isReadMore9 = !this.isReadMore9
  }
  constructor() { }

  ngOnInit(): void {
  }

}
