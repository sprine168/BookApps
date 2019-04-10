import { Component, OnInit } from '@angular/core';
import { Tome } from './tome.model'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  message:String = "";

 library:Tome[] = [
    new Tome("One Fish,Two Fish","Dr. Seuss",9.95),
    new Tome("Green Eggs and Ham","Dr. Seuss",8.00),
    new Tome("Horton Hears a Who","Dr. Seuss",8.50),
    new Tome("Oh, the Places You'll Go","Dr. Seuss",14.95),
  ]

  constructor() { }

  ngOnInit() {
  }

}
