import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'
import * as $ from 'jquery';

@Component({
  selector: 'pastel',
  templateUrl: './pastel.html'
})

/*
    title: {
      display: true,
      text: 'Trámites de la Secretaría de Educación por reposicion de personal'
    },*/



export class PieComponent implements AfterViewInit {
  title = 'Pastel de datos';
  canvas: any;
  ctx: any;

  data: any = [{
  cantidad: 53,
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



    let colors = {
      	red: 'rgb(244,67,54',
      	orange: 'rgb(255, 152, 0',
      	yellow: 'rgb(255, 235, 39',
      	green: 'rgb(76, 175,80',
      	blue: 'rgb(33, 150, 243',
      	purple: 'rgb(156,39,176',
      	grey: 'rgb(158,158,158'
      };

    this.canvas = document.getElementById("pastel-component");
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
    type: 'doughnut',
    data: {
        labels: ["Trámites Pendientes: 53"],
        datasets: [{
            data: [53,70-53],
            backgroundColor: [
                colors.green + ',1)',
                'rgb(0, 0,0,0)'
            ],
            borderColor: [
                colors.green + ',1)',
                'rgb(0, 0,0,0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 85,
      animation: {
          duration: 1500
        }
			}
    });
}
}
