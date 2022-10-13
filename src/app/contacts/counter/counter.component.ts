import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  width: number = 0;
  height: number = 0;

  change() {
    if(!this.width || !this.height || this.height<=0 || this.width<=0){
      this.perim = this.square = this.diagonal = 0;
      return;
    }
    this.perim = 2 * (this.width  + this.height);
    this.square = this.width * this.height;
    this.diagonal = Math.sqrt(this.width**2 + this.height**2);

  }
  perim: number = 0;
  square: number = 0;
  diagonal: number = 0;
  constructor() { }


}
