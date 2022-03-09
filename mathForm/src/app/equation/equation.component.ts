import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {
  mathForm=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b:new FormControl(this.randomNumber()),
    answer:new FormControl(''),
  },[
    (form:AbstractControl)=>{
      if(form.value.a+form.value.b!==Number(form.value.answer)){
        return {addition:true}
        
      }else{
        return null;
      }
    }
  ])
  secondsPerSolution=0;
  constructor() { }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(filter(val=>val=='VALID'),scan((acc,value)=>{
      return {
        problemSolved:acc.problemSolved+1,
        startTime:acc.startTime
      }
    },{problemSolved:0,startTime:new Date()}),delay(200)).subscribe((value)=>{
          this.secondsPerSolution=(value.startTime.getSeconds()-new Date().getSeconds())/value.problemSolved;
        this.mathForm.setValue({
          a:this.randomNumber(),
          b:this.randomNumber(),
          answer:''
        })
   
    })
  }
  get a(){
   return this.mathForm.controls['a'].value
  }
  get b(){
    return this.mathForm.controls['b'].value
   }
  randomNumber(){
    return Math.floor(Math.random()*10);
  }

}
