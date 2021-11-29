import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";
  date:string='';
  currency:number=0;
  height:number=0;
  miles:number=0;
  onNameChange(event:any){
    this.name=event.target.value;
  }
  onDateChange(event:any){
this.date=event.target.value
  }
  onCurrency(event:any){
    this.currency=Number(event.target.value)
  }
  onHeight(event:any){
    this.height=parseFloat(event.target.value);
  }
  onMilesChange(event:any){
    this.miles=Number(event.target.value)
  }
}
