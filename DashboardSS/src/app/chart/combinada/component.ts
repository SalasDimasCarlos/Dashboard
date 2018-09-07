import { Component, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'combinada',
  templateUrl: './combinada.html'
})

export class ComboComponent implements AfterViewInit {
  title = 'Combo';
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

    this.canvas = document.getElementById('combinada-component');
    this.ctx = this.canvas.getContext('2d');

    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: colors.blue,
        borderWidth: 2,
        fill: false,
        data: [12, 5, 32, 15, 12, 3]
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: colors.red,
        data: [13, 19, 31, 5, 12, 7],
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: colors.green,
        data: [19, 9, 13, 9, 5, 9]
      }]

    };


    let myChart = new Chart(this.ctx, {
    type: 'bar',
    data: chartData,
    options: {
					responsive: true,
					title: {
						display: true,
						text: 'Chart.js Combo Bar Line Chart'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					}
				}
    });
  }
}
