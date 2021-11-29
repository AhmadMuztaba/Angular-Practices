import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, type:string): unknown {
    if(!value){
      return 0;
    }
    switch(type){
      case 'm':
        return value+10;
      case 'v':
        return value+15;
      default:
        return value+20;
    }
  }

}
