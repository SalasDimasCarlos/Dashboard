import { Component,  ViewChild, AfterViewInit} from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent {
  directions = false;

  @ViewChild(AgmMap) public agmMap: AgmMap;

  title: string = 'Ubicar Escuelas';

  ngAfterViewInit() {
    //this.agmMap.triggerResize();
  }


  public origin = { lat: 20.684697, lng: -103.395303 }
  public destination = { lat: 20.684697, lng: -103.477303 }

  public getDirection(){
    this.directions = !this.directions;
  }
}
