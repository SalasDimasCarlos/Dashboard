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
  comp: any;
  comp2: any;
  comp3: any;
  comp4: any;
  ngAfterViewInit() {
    this.comp = document.getElementById('card');
    this.comp2 = document.getElementById('card2');
    this.comp3 = document.getElementById('card3');
    this.comp4 = document.getElementById('card4');
  }

  changeClass1() {
    if ( this.comp.classList.contains('flipped') )
    {
        this.comp.classList.remove('flipped');
    } else {
      this.comp.classList.add('flipped');
    }
  }

    changeClass2() {
      if ( this.comp2.classList.contains('flipped') )
      {
          this.comp2.classList.remove('flipped');
      } else {
        this.comp2.classList.add('flipped');
      }
    }

    changeClass3() {
      if ( this.comp3.classList.contains('flipped') )
      {
          this.comp3.classList.remove('flipped');
      } else {
        this.comp3.classList.add('flipped');
      }
    }

    changeClass4() {
      if ( this.comp4.classList.contains('flipped') )
      {
          this.comp4.classList.remove('flipped');
      } else {
        this.comp4.classList.add('flipped');
      }
    }
}
