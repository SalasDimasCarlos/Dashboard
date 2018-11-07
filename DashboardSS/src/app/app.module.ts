import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material';

import { ChartModule } from './chart/chart.module';
import { MapModule } from './map/map.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ChartModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
