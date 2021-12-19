import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() items:any[]=[];
  openedItemIndex=0;
  constructor() { }

  ngOnInit(): void {
  }
  changeIndex(i:any){
    if(this.openedItemIndex==i){
      this.openedItemIndex=-1;
    }else{
      this.openedItemIndex=i
    }
  }
}
