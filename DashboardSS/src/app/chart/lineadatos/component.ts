import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'lineadatos',
  templateUrl: './lineadatos.html'
})

export class LineComponent implements AfterViewInit {
  title = 'Linea de datos';
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


      let DataComponent = {
        total: [32, 28, 44, 14, 17, 16, 20],
        SEJ: [13, 19, 31, 5, 12, 7, 5],
        DRSE: [19, 9, 13, 9, 5, 9,15]


      }

    this.canvas = document.getElementById('lineadatos-component');
    this.ctx = this.canvas.getContext('2d');

    var chartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        type: 'line',
        label: 'Total Trámites',
        borderColor: colors.green,
        borderWidth: 2,
        fill: false,
        data: DataComponent.total
      }, {
        type: 'line',
        label: 'Validación SEJ',
        borderColor: colors.orange,
        borderWidth: 2,
        fill: false,
        data: DataComponent.SEJ
      },{
        type: 'line',
        label: 'Validación DRSE',
        borderColor: colors.blue,
        borderWidth: 2,
        fill: false,
        data: DataComponent.DRSE
      }]

    };

    let myChart = new Chart(this.ctx, {

    type: 'line',
    data: chartData,
    options: {
				responsive: true,
				tooltips: {
					mode: 'index',
					intersect: true
				},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }
}
