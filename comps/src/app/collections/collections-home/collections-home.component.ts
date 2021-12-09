import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data=[{
    name:'James',
    age:'30',
    job:'Designer'
  },{
    name:'Jack',
    age:'30',
    job:'Dr'
  },{
    name:'Jill',
    age:'30',
    job:'Engineer'
  }];
  headers=[
    {
      key:'name',
      label:'Name'
    },
    {
      key:'age',
      label:'Age'
    },{
      key:'job',
      label:'Job'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
