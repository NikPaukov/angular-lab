import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  weeks = {
    0: "Sunday",
    1: "Monday",
    2:"Tuesday",
    3:"Wednesday",
    4: "Thursday",
    5:"Friday",
    6:"Sunday",
  }
  week: string = "";
  getWeek(date: string) {
    // @ts-ignore
    this.week = this.weeks[new Date(date).getDay()];
  }
  ngOnInit(): void {
  }

}
