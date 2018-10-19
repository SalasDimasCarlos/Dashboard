import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
//import { GMapService } from './map.service';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [MapComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHAZLH4w8MCMHf4NTwSm5JpO-igI3844M'
    }),
    AgmDirectionModule      // agm-direction
  ],
  providers: []
})

export class MapModule {

}
