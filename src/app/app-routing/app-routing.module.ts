import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "../main/main.component";
import {AuthComponent} from "../auth/auth.component";
import {FaqComponent} from "../faq/faq.component";
import {NewsComponent} from "../news/news.component";
import {TableComponent} from "../table/table.component";
import {ContactsComponent} from "../contacts/contacts.component";

const routes: Routes = [{path:'', component:MainComponent},
  {path:"auth", component:AuthComponent},
  {path:"faq", component:FaqComponent},
  {path:"students", component:TableComponent},
  {path:"contacts", component:ContactsComponent},
  {path:"news", component:NewsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
