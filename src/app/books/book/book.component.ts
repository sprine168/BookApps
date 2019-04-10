import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tome } from '../tome.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  // Decorator is used for showing the Tomes
  @Input()
  public tome: Tome;

  @Output()
  public sendMessageToMom = new EventEmitter;

  tellMom(message){
    this.sendMessageToMom.emit(message);
  }



  constructor() { }

  ngOnInit() {
  }

}
