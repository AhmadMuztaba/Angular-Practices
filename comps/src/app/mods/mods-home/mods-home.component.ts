import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  mods:boolean=false;
  items=[
    {
      title:'Why is the Sky blue?',
      content:'The sky is blue because it is sky'
    },{
      title:'What does Orange tastes like?',
      content:'An Orange tastes exactly like orange'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  showMods(){
    this.mods=!this.mods;
  }

}
