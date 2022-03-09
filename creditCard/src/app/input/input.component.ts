import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
 @Input() control:any;
 @Input() label:any;
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.control)
  }

}
