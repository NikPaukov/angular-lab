import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import { CardComponent } from './main/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { NewsCardComponent } from './news/news-card/news-card.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import { ContactsComponent } from './contacts/contacts.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './contacts/counter/counter.component';
import { CatsComponent } from './contacts/cats/cats.component';
import {CommonModule} from "@angular/common";
import { TransComponent } from './contacts/trans/trans.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    AuthComponent,
    FaqComponent,
    NewsComponent,
    NewsCardComponent,
    TableComponent,
    ContactsComponent,
    CounterComponent,
    CatsComponent,
    TransComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
