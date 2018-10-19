import { Component,  ViewChild, AfterViewInit} from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent {
  @ViewChild(AgmMap) public agmMap: AgmMap;

  title: string = 'Ubicar Escuelas';

  ngAfterViewInit() {
    //this.agmMap.triggerResize();
  }
}
