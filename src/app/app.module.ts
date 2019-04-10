import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { EnterBookComponent } from './books/enter-book/enter-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    EnterBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
