import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { ComboModule } from './combinada/module';
import { LineModule } from './lineadatos/module';
import { PieModule } from './pastel/module';
import { PopUpModule } from './content/popup.module';

@NgModule({
  declarations: [
    ChartComponent
  ],
  exports: [ChartComponent],
  imports: [
    BrowserModule,
    ComboModule,
    LineModule,
    PieModule,
    PopUpModule
  ],
  providers: []
})
export class ChartModule { }
