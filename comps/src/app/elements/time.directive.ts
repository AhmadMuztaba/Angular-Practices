import { Directive,ViewContainerRef,TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {

  constructor(
    private viewContainer:ViewContainerRef,
    private templateRef:TemplateRef<any>
  ) { }
  @Input('appTimes') set render(times:number){
    this.viewContainer.clear();
    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{}); 
    }
  }

}
