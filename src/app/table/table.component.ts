import { Component, OnInit } from '@angular/core';

export interface StudentElement {
  name: string;
  surname: string;
  secondName: string;
  email: string;
  dateOfBirth: Date;
  group: string;
}

const ELEMENT_DATA: StudentElement[] = [
  {name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
{name: "Nikita", surname: "Paukov", secondName:"Oleksandrovich", email:"nikpaukov8214@gmail.com",
    dateOfBirth:new Date(12312321312), group: "ІА-12"},
  {name: "Artem", surname: "Nakurkin", secondName:"Ivanovich", email:"kurkin1231@ukr.net", dateOfBirth:new Date(1231312321), group: "АС-11"},
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'surname', 'secondName', 'email', 'dateOfBirth', 'group'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
