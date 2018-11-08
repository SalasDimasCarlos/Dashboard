import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

//import {ExcelService} from './services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadChart = true;
  loadMap = false;
  actual = "chart";

    public LoadChart() {
      if(this.actual != "chart")
      {
          let este = this;
          setTimeout(function() {
                    este.loadChart = !este.loadChart;
                    este.loadMap = !este.loadMap;
          },1000);
          this.actual = "chart";
      }
    }

    public LoadMap() {
      if(this.actual != "map")
      {
        let este = this;
        setTimeout(function() {
                  este.loadMap = !este.loadMap;
                  este.loadChart = !este.loadChart;
        },1000);
        this.actual = "map";
      }

    }

    ngAfterViewInit() {

      let $anterior = $(".active");
      var Panterior = "chart";

      $("ul#change_page li").each(function() {

        $(this).click(function(){
                $($anterior).removeClass("active");
                $(this).addClass("active");
                $anterior = this;

                let Pnueva = $(this).attr("id");
                if(Pnueva != Panterior)
                {
                  //Desaparece
                  $("#content_" + Panterior).removeClass("fadeIn");
                  $("#content_" + Panterior).removeClass("animated");
                  $("#content_" + Panterior).addClass("fadeOut animated");

                  //Terminada la animacion
                  setTimeout(function() {
                            $("#content_" + Panterior).css("display","none");
                            $("#content_" + Panterior).removeClass("fadeOut");
                            $("#content_" + Panterior).removeClass("animated");
                            $("#content_" + Pnueva).addClass("fadeIn animated");
                            $("#content_" + Pnueva).css("display","block");
                            Panterior = Pnueva;
                  },1000);

                  /*$("#content_" + Panterior).on(transitionEvent,
                              function(event) {
                                $(this).css("display","none");
                                $(this).removeClass("fadeOut");
                                $(this).removeClass("animated");
                                //$("#content_" + Pnueva).addClass("fadeIn animated");
                                $("#content_" + Pnueva).addClass("fadeIn animated");
                 });*/
               }
              });

      });
    }




}
