import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/@services/auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUserName } from '../validators/unique-user-name';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signedIn$:BehaviorSubject<Boolean>;
  form=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.min(5)],[this.usernameValidate.validate]),
    password:new FormControl('',[Validators.required,Validators.min(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.min(6)])
  },{
    validators:[this.mathPassword.validate]
  })
  constructor(private mathPassword:MatchPassword,private usernameValidate:UniqueUserName,private authService:AuthService) {
    this.signedIn$=this.authService.isSignedIn$;
  }
  ngOnInit(): void {
  
  }
  submit(){
    if(this.form.valid){
      this.authService.signUp(this.form.value).subscribe({
        next:(val)=>{
          console.log(val);
        },
        error:(err)=>{
          console.log(err.message);
        }
      })
    }
  }
}
