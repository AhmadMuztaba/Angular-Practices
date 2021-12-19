import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {
      value:22,
      label:'# of Users'
    },{
      value:'900',
      label:'Revenue'
    },{
      value:50,
      label:'Reviews'
    }
  ]
  images=[
    {
      url:'https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg',
      title:'Pikachu1',
      description:'pikachu1'
    },{
      url:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C120/production/_104304494_mediaitem104304493.jpg',
      title:'Pikachu2',
      description:'pikachu2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
