import { Component, AfterViewInit, OnInit} from '@angular/core';
import * as Chart from 'chart.js'
import * as $ from 'jquery';

@Component({
  selector: 'combinada',
  templateUrl: './combinada.html'
})

export class ComboComponent implements AfterViewInit {
  title = 'Combo';
  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    var acum = 1;
    /*for (acum = 1 ; acum < 5; acum++ )
    {
      $('#cominada-components').append("<canvas id='combinada-component"+acum+"'></canvas>");
    }
    */

    $('#cominada-components').append("<canvas id='combinada-component"+acum+"'></canvas>");
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
       cancelados: [13, 19, 31, 5, 12, 7, 5],
       procedentes: [19, 9, 13, 9, 5, 9,15]
     }


    this.canvas = document.getElementById('combinada-component1');
    this.ctx = this.canvas.getContext('2d');

    var chartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [{
        type: 'line',
        label: 'Total Trámites',
        borderColor: colors.blue,
        borderWidth: 2,
        fill: false,
        data: DataComponent.total
      }, {
        type: 'bar',
        label: 'Cancelados',
        backgroundColor: colors.red,
        data: DataComponent.cancelados,
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Procedentes',
        backgroundColor: colors.green,
        data: DataComponent.procedentes
      }]

    };


    let myChart = new Chart(this.ctx, {
    type: 'bar',
    data: chartData,
    options: {
					responsive: true,
          animation: {
              duration: 1500
            },
					tooltips: {
						mode: 'index',
						intersect: true
					}
				}
    });
  }
}
