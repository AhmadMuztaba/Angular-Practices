import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholer',
  templateUrl: './placeholer.component.html',
  styleUrls: ['./placeholer.component.scss']
})
export class PlaceholerComponent implements OnInit {
  @Input() header=true;
  @Input() lines=3;
  constructor() { }

  ngOnInit(): void {
  }

}
