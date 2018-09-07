import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LineComponent } from './component';

@NgModule({
  declarations: [
    LineComponent
  ],
  exports: [LineComponent],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class LineModule {

}
