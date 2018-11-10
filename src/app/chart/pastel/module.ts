import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PieComponent } from './component';

@NgModule({
  declarations: [
    PieComponent
  ],
  exports: [PieComponent],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class PieModule {

}
