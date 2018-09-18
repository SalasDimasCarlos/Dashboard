import { Component, AfterViewInit } from '@angular/core';

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
    eid: '1',
    ename: 'SOLICITUDES POR VALIDAR / ANALIZAR'
    },{
    eid: '2',
    ename: 'SOLICITUDES EN NÓMINA Y FUERA DE NÓMINA'
    },{
    eid: '3',
    ename: 'NECESIDADES Y EXCEDENTES DE PERSONAL'
    },{
    eid: '4',
    ename: 'AUDITORÍA DE REVALIDACIONES'
    },{
    eid: '5',
    ename: 'SOLICITUDES POR CENTRO DE ADSCRIPCIÓN (BASE ENERO)'
    },{
    eid: '6',
    ename: 'REGISTRO DE CONTRATACIÓN'
    }];


  ngAfterViewInit() {
  }


}
