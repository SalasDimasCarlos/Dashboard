import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { ComboModule } from './combinada/module';
import { LineModule } from './lineadatos/module';
import { PieModule } from './pastel/module';

@NgModule({
  declarations: [
    ChartComponent
  ],
  exports: [ChartComponent],
  imports: [
    BrowserModule,
    ComboModule,
    LineModule,
    PieModule
  ],
  providers: []
})
export class ChartModule { }
