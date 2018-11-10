import { Component,  ViewChild, AfterViewInit} from '@angular/core';
import { AgmMap } from '@agm/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gmap',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent {
  directions = false;
  infoRoute = false;

  time = "0";
  distance = "0";

  schools: any = [{
    lat: 20.684697,
    long: -103.395303,
    name: 'Escuela Primaria Federal 1'
    },{
      lat: 20.784697,
      long: -103.145303,
      name: 'Escuela Primaria Federal 2'
    },{
      lat: 20.684697,
      long: -103.3785303,
      name: 'Escuela Primaria Federal 3'
      },{
        lat: 20.684697,
        long: -103.477303,
        name: 'Escuela Primaria Federal 4'
      },{
        lat: 18.684697,
        long: -103.477303,
        name: 'Escuela Primaria Federal 5'
      }];


  @ViewChild(AgmMap) public agmMap: AgmMap;

  title: string = 'Ubicar Escuelas';

  ngAfterViewInit() {
    //this.agmMap.triggerResize();
  }


  public origin = { lat: 20.684697, lng: -103.395303 }
  public destination = { lat: 20.684697, lng: -103.477303 }

  public getDirection(){

    let index = $('#option1 option:selected').val();
    this.origin = {
      lat: this.schools[index].lat,
      lng: this.schools[index].long
    }

    index = $('#option2 option:selected').val();
    this.destination = {
      lat: this.schools[index].lat,
      lng: this.schools[index].long
    }

    //console.log(this.origin);
    this.directions = true;

    if(this.directions)
    {
      let este = this;
        setTimeout(function() {
        let routeInfo = $(".adp-summary :nth-child(1)");
        este.distance = routeInfo[0].innerText;
        //console.log(routeInfo[0].innerText);
        este.time = routeInfo[1].innerText;
        este.time = este.time.replace("hour","hora");
        //console.log(routeInfo[1].innerText);
        //let distance = routeInfo.Children(0).innerText;
      },700);
    }

    this.infoRoute = true;
  }

  public getPanel() {
    return document.querySelector('#myPanel');
  }

  public renderOptions = {
      suppressMarkers: true,
  }
}
