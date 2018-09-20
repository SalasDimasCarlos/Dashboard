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
console.log(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {

    type: 'doughnut',
    data: {
        labels: ["Trámites Procedentes","Trámites Cancelados"],
        datasets: [{
            data: [150,78],
            backgroundColor: [
                colors.green + ',1)',
                colors.red + ',1)'
            ],
            borderColor: [
                colors.green + ',1)',
                colors.red + ',1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      cutoutPercentage: 60
			}
    },
    });
  }
}
