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

    this.canvas = document.getElementById('lineadatos-component');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {

    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                colors.red + ',.8)'
            ],
            borderColor: [
                colors.red,
            ],
            borderWidth: 1
        }]
    },
    options: {
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
