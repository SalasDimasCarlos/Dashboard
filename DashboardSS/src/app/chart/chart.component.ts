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

    function calculate(target)
    {
      //console.log(target[4]);
      var control = target[4];
      var string = "item";
      var clase = "move-down";
      var num = parseInt(control);
      if (control == 2 || control == 3)
      {
        string = "."+string+num;
        var $clone = $(string).clone();

        /*
        num = num + 1;
        string = "."+string+num;
        console.log(string);
        $(string).addClass("move-down");

        string ="item";
        num = num + 1;
        string = "."+string+num;
        console.log(string);
        $(string).addClass("move-down");*/

      }

    }

     let miPrimeraPromise = new Promise((resolve, reject) => {
      // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
      // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
      // En la vida real, probablemente uses algo como XHR o una API HTML5.
      setTimeout(function(){
        resolve("¡Éxito!"); // ¡Todo salió bien!
      }, 1800);
    });


      $(".four").click(function () {
      var target = $(this).attr("id");
      //calculate(target);

      if($(".active").attr("id") != target)
      {
        $(".active").addClass("inactive");
        $(".active").removeClass("active");
      }

      var comp = this;
      setTimeout(function(){
          $('html,body').animate({
            scrollTop: $(comp).offset().top
        }, 'slow');

      }, 1000);


/*
      miPrimeraPromise.then((successMessage) => {

        $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 'slow');
    });*/

      if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).addClass("inactive");

      } else {
        $(this).removeClass("inactive");
        $(this).addClass("active");

       }

    });
  }


}
