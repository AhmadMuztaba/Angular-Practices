import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholerComponent } from './placeholer/placeholer.component';
import { TimeDirective } from './time.directive';
import { SharedModule } from '../shared/shared.module';
import { SegementsComponent } from './segements/segements.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholerComponent,
    TimeDirective,
    SegementsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports:[
    ElementsHomeComponent
  ]
})
export class ElementsModule { }
