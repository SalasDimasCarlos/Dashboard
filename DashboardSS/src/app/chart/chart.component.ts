import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements AfterViewInit {
  title = 'Chart';

    data: any = [{
    eid: 'item1',
    ename: 'SOLICITUDES POR VALIDAR / ANALIZAR',
    widget: 'pastel'
    },{
    eid: 'item2',
    ename: 'SOLICITUDES EN NÓMINA Y FUERA DE NÓMINA',
    widget: 'hey'
    },{
    eid: 'item3',
    ename: 'NECESIDADES Y EXCEDENTES DE PERSONAL',
    widget: 'hey'
    },{
    eid: 'item4',
    ename: 'AUDITORÍA DE REVALIDACIONES',
    widget: 'hey'
    },{
    eid: 'item5',
    ename: 'SOLICITUDES POR CENTRO DE ADSCRIPCIÓN (BASE ENERO)',
    widget: 'hey'
    },{
    eid: 'item6',
    ename: 'REGISTRO DE CONTRATACIÓN',
    widget: 'hey'
    }];


  ngAfterViewInit() {

    function timer(property, value)
    {
      setTimeout(function(){
        if (value == true)
        {
          $(property).find(".content_widget").css("display","block");
            $(property).find(".content").css("display","none");
        } else {
          $(property).find(".content_widget").css("display","none");
            $(property).find(".content").css("display","block");
        }
      }, 1000);

    }

    function calculate(target)
    {
      var control = target[4];
      var string = "item";
      var clase = "move-down";
      var num = parseInt(control);
      if (control == 2 || control == 3)
      {
        string = "."+string+num;
        var $clone = $(string).clone();
      }

    }

      $(".four").click(function () {
      var target = $(this).attr("id");
      //calculate(target);

      if($(".active").attr("id") != target)
      {
        $(".active").addClass("inactive");
        $(".active").removeClass("active");
        timer(this, true);
      }

      var comp = this;
      setTimeout(function(){
          $('html,body').animate({
            scrollTop: $(comp).offset().top
        }, 'slow');

      }, 1000);

      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).addClass("inactive");
        timer(this, true);

      } else {
        $(this).removeClass("inactive");
        $(this).addClass("active");
        timer(this, false);

        //console.log($(this).find(".content_widget"));

       }

    });
  }


}
