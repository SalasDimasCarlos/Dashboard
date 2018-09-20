import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements AfterViewInit {
  title = 'Chart';

    data: any = [{
    eid: 'item1',
    ename: 'SOLICITUDES POR VALIDAR / ANALIZAR',
    widget: 'pastel'
    },{
    eid: 'item2',
    ename: 'SOLICITUDES EN NÓMINA Y FUERA DE NÓMINA',
    widget: 'hey'
    },{
    eid: 'item3',
    ename: 'NECESIDADES Y EXCEDENTES DE PERSONAL',
    widget: 'hey'
    },{
    eid: 'item4',
    ename: 'AUDITORÍA DE REVALIDACIONES',
    widget: 'hey'
    },{
    eid: 'item5',
    ename: 'SOLICITUDES POR CENTRO DE ADSCRIPCIÓN (BASE ENERO)',
    widget: 'hey'
    },{
    eid: 'item6',
    ename: 'REGISTRO DE CONTRATACIÓN',
    widget: 'hey'
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
