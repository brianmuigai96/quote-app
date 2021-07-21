import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.newQuote);
this.newQuote = new Quote(0,"","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
