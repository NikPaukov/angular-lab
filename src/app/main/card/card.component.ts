import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() src: string = "";
@Input() content: string = "Content should be here";
  constructor() { }

  ngOnInit(): void {
  }

}
