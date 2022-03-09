import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  cardForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    cardNumber:new FormControl(''),
    expiration:new FormControl(''),
    secuirityCode:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
