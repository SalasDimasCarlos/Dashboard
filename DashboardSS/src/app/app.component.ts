import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

//import {ExcelService} from './services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardSS';

  ngAfterViewInit() {
/*
    console.log("Reading data");
    $.get('assets/data_comas.txt', function(data) {
      //console.log(data);
      //var lines = data.split(/\r\n|\r|\n/).length;
      //console.log(lines);
        console.log("Data Read");

    }, 'text');*/
  }

}
