import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { ComboModule } from './combinada/module';
import { LineModule } from './lineadatos/module';

@NgModule({
  declarations: [
    ChartComponent
  ],
  exports: [ChartComponent],
  imports: [
    BrowserModule,
    ComboModule,
    LineModule
  ],
  providers: []
})
export class ChartModule { }
