import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.scss']
})
export class QouteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Thomas','Common sense is genius dressed in its working clothes.','Mark David.', new Date(2021,7,21),20,0),
    new Quote (2,'Jane','He that respects himself is safe from others.','Steven Tray.', new Date(2021,7,21),100,2),
    new Quote (3,'James','Take into account that great love and great achievements involve great risk.' ,'Andrew Kim.', new Date(2021,7,21),0,1),
    new Quote (4,'Umma','You can never plan the future by the past..','Nelson Troy', new Date(2021,5,21),0,20),

  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
