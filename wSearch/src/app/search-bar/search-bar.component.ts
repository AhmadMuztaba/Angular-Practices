import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() output=new EventEmitter<string>();
  term=''
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event){
    this.term=event.target.value;
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.term)
    this.output.emit(this.term);
  }

}
