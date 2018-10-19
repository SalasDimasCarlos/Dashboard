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
  anterior = 0;
  intAnt = 0;
  now = 1;

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


  }*/

    public NextPage(val, xant) {

      if(this.now != xant)
      {
        if(this.anterior != 0)
        {
          //alert(this.anterior);
          var before = $("#" + this.anterior);

          var next = $("#"+ val);

          if(xant < this.intAnt)
          {
            next.removeClass("fadeOutLeft");
            next.removeClass("animated");

            before.addClass("fadeOutRight");
            before.addClass("animated");

            next.addClass("fadeInLeft");
            next.addClass("animated");

            setTimeout(function() {
              before.css("display","none");
            },1000);
          } else {
              next.removeClass("fadeOutRight");
              next.removeClass("animated");

              before.addClass("fadeOutLeft");
              before.addClass("animated");

              next.css("display","block");
              next.addClass("fadeInRight");
              next.addClass("animated");
          }
        } else {

          var next = $("#content_page");
          next.addClass("fadeOutLeft");
          next.addClass("animated");


          next = $("#"+ val);
          next.css("display", "block");
          next.addClass("fadeInRight");
          next.addClass("animated");
        }

        this.anterior = val;
        this.intAnt = xant;
        this.now = xant;
      }
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
