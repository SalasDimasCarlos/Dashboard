import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PopUpComponent } from './popup.component';

@NgModule({
  declarations: [
    PopUpComponent
  ],
  exports: [PopUpComponent],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class PopUpModule {

}
