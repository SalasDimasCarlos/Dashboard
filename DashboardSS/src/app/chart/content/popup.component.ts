import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'popup',
  templateUrl: './popup.html',
  styleUrls: ['./popup.component.css']
})

export class PopUpComponent implements AfterViewInit {
  title = 'Contenido';

    ngAfterViewInit() {
  }
}
