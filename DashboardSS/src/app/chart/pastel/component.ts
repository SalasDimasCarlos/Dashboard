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
  ctx2: any;

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

    this.canvas = $(".pastel-component");
    //console.log(this.canvas);
    this.ctx = this.canvas[0].getContext('2d');
    let myChart = new Chart(this.ctx, {
    type: 'doughnut',
    data: {
        labels: ["Trámites Pendientes"],
        datasets: [{
            data: [53,70-53],
            backgroundColor: [
                colors.blue + ',1)',
                'rgb(0, 0,0,0)'
            ],
            borderColor: [
                colors.blue + ',1)',
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

    /*  SECOND PASTEL  */
    this.ctx2 = this.canvas[1].getContext('2d');
    myChart = new Chart(this.ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Solicitudes Fuera de Nómina"],
        datasets: [{
            data: [26345,102077-26345],
            backgroundColor: [
                colors.orange + ',1)',
                'rgb(0, 0,0,0)'
            ],
            borderColor: [
                colors.orange + ',1)',
                'rgb(0, 0,0,0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      cutoutPercentage: 85,
      animation: {
          duration: 1800
        }
			}
    });

      /*  THIRD PASTEL  */
      this.ctx2 = this.canvas[2].getContext('2d');
      myChart = new Chart(this.ctx2, {
      type: 'doughnut',
      data: {
          labels: ["Revalidaciones"],
          datasets: [{
              data: [725,3000-725],
              backgroundColor: [
                  colors.purple + ',1)',
                  'rgb(0, 0,0,0)'
              ],
              borderColor: [
                  colors.purple + ',1)',
                  'rgb(0, 0,0,0)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 85,
        animation: {
            duration: 1000
          }
  			}
      });

      /*  FOURTH PASTEL  */
      this.ctx2 = this.canvas[3].getContext('2d');
      myChart = new Chart(this.ctx2, {
      type: 'doughnut',
      data: {
          labels: ["Nómina diferente"],
          datasets: [{
              data: [183,300-183],
              backgroundColor: [
                  colors.grey + ',1)',
                  'rgb(0, 0,0,0)'
              ],
              borderColor: [
                  colors.grey + ',1)',
                  'rgb(0, 0,0,0)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 85,
        animation: {
            duration: 1200
          }
  			}
      });

      /*  FIFTH PASTEL  */
      this.ctx2 = this.canvas[4].getContext('2d');
      myChart = new Chart(this.ctx2, {
      type: 'doughnut',
      data: {
          labels: ["Trámites procedentes no completados"],
          datasets: [{
              data: [700,1500-700],
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
