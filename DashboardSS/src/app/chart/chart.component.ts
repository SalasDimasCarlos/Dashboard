import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements AfterViewInit {
  title = 'Chart';
  colors = {
  	red: 'rgb(21,0,0)',
  	orange: 'rgb(25, 11, 0)',
  	yellow: 'rgb(25, 21, 53)',
  	green: 'rgb(11, 25, 3)',
  	blue: 'rgb(30, 13, 22)',
  	purple: 'rgb(10, 27, 15)',
  	grey: 'rgb(201, 203, 207)'
  };


    data: any = [{
    eid: 'item1',
    ename: 'SOLICITUDES POR VALIDAR / ANALIZAR'
    },{
    eid: 'item2',
    ename: 'SOLICITUDES EN NÓMINA Y FUERA DE NÓMINA'
    },{
    eid: 'item3',
    ename: 'NECESIDADES Y EXCEDENTES DE PERSONAL'
    },{
    eid: 'item4',
    ename: 'AUDITORÍA DE REVALIDACIONES'
    },{
    eid: 'item5',
    ename: 'SOLICITUDES POR CENTRO DE ADSCRIPCIÓN (BASE ENERO)'
    },{
    eid: 'item6',
    ename: 'REGISTRO DE CONTRATACIÓN'
    }];


  ngAfterViewInit() {
      $(".four").click(function () {
      var target = $(this).attr("id");

      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).addClass("inactive");

      } else {
        $(this).removeClass("inactive");
        $(this).addClass("active");

       }

    });
  }


}
