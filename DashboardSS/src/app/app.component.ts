import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

//import {ExcelService} from './services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tablero de Estadísticas';
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


  public loadMyComponent() {

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
