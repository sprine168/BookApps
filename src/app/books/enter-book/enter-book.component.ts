import { Component, OnInit } from '@angular/core';
import { Tome } from '../tome.model';

@Component({
  selector: 'app-enter-book',
  templateUrl: './enter-book.component.html',
  styleUrls: ['./enter-book.component.css']
})
export class EnterBookComponent implements OnInit {

  title:String = "";
  author:String = "";
  price:number = 0.0;

  book:Tome;
  enterBook(){

  }

  isValid(){
    let isOk = false;

    isOk = this.title.length > 0 && this.author.length > 0;

    return isOk;
  }

  constructor() { }

  ngOnInit() {
  }

}
