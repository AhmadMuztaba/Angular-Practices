import { Directive,Input,ViewContainerRef,TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }
  @Input('appTimes') set render(times:any){
    this.viewContainer.clear();
    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{});
    }
  }
}
