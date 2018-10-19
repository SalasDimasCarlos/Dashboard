import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

//import {ExcelService} from './services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo del Sitio';
  loadComponent = false;


  whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

/*
  initialize(setMap) {

    var mapOptions;
    var pyrmont = new google.maps.LatLng(20.684697,-103.395303);

    /* MAP OPTIONS - MAP STYLE */
/*    mapOptions = {
      center: pyrmont,
      zoom: 5,
      mapTypeId: 'roadmap',
      scrollwheel: false,
      styles: [
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 100
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#C6E2FF"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#C5E3BF"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#D1D1B8"
              }
          ]
      }]
    };


    mapContent = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();

    // Event that closes the Info Window with a click on the map
    google.maps.event.addListener(mapContent, 'click', function() {
      infoWindow.close();
    });

    if(setMap == "location") {
      this.displayMarkers("location");

    }
    if(setMap == "nearMe") {
      this.displayMarkers("nearMe");

    }
    if (setMap == "needsMe") {
      this.displayMarkers("needsMe");
    }

  }*/

    public NextPage() {
      //console.log("Hello");
      var next = $("#content_page");
      next.addClass("fadeOutLeft");
      next.addClass("animated");


      next = $("#content_map");
      next.css("display", "block");
      next.addClass("fadeInRight");
      next.addClass("animated");

    }


  public loadMyComponent() {
    //
    var transitionEvent = this.whichTransitionEvent();
    let container = $("#container");

    if(this.loadComponent == true)
    {
      container.removeClass('fadeInRight');
      container.removeClass('animated');


      container.addClass('bounceOut');
      container.addClass('animated');

      let este = this;
      setTimeout(function() {
                este.loadComponent = !este.loadComponent;
      },1000);


    } else {
      this.loadComponent = !this.loadComponent;
        setTimeout(function(){

          container.addClass('fadeInRight');
          container.addClass('animated');
        }, 10);


    }

  }

  public show() {

      var open = document.getElementById('trigger-menu'),
          target = document.getElementById('menu'),
          container = document.getElementById('container');

        open.classList.toggle('trigger');
        target.classList.toggle('shown');

        if(container != null)
        {
        container.classList.add('padding');
        container.classList.toggle('grow-up');

        setTimeout(function(){
          container.classList.remove('padding');
        },1000);
      }

  }

  ngAfterViewInit() {


  }

}
