import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, Validators } from "@angular/forms";

@Injectable({providedIn:'root'})
export class MatchPassword implements Validator{
    validate(formGroup:FormGroup) {
       const {password,confirmPassword}=formGroup.value;
       if(password===confirmPassword){
        return null;
       }
       else{
        return {passwordDontMatch:true}
           
       }
       
   }
}
