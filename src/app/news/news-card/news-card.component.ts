import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from "../../main/card/card.component";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent extends CardComponent{
@Input() header: string = "";
@Input() footer: string = "";

}
