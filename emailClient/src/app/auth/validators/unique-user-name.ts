import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl, FormGroup } from "@angular/forms";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UniqueUserName implements AsyncValidator {
    constructor(private http:HttpClient){

    }
    validate=(control:FormControl)=>{
        const {value}=control;
        console.log(value);
        return this.http.post<any>('http://localhost:3000/api/isUserNameExist',{username:value}).pipe(
            map(value=>{
                return null;
            }),
            catchError(err=>{
                return of(err.error)
            })
        );
    }

}
