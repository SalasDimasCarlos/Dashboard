import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComboComponent } from './component';

@NgModule({
  declarations: [
    ComboComponent
  ],
  exports: [ComboComponent],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class ComboModule {

}
