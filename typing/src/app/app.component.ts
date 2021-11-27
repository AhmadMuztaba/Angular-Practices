import { Component,OnInit } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  generatedText:string='';
  error:boolean=false;
  type='';
  show=false;
  complete=false;
  time=0;
  ngOnInit(){
    this.generatedText=lorem.sentence();
  }
  checkInput(event:any){
    this.show=true;
    this.type=event.target.value;
    let setT=setInterval(()=>{
      if(this.type==this.generatedText){
        this.complete=true;
        this.show=true;
        clearInterval(setT)
      }
      else{
        this.time+=1;
      }
    },1000)
     
  }
  check(letter:string,input:string):string{
    if(!input){
      return 'black';
    }
    return letter==input?'green':'red';
  }
}
