import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wSearch';
  pages=[];
  constructor(private wikiSearch:WikipediaService){

  }
  search(event){
    this.wikiSearch.search(event).subscribe((respomse:any)=>{
      this.pages=respomse.query.search;
    });
    
  }
}
