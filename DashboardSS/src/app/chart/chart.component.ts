import { Component, AfterViewInit, OnInit } from '@angular/core';
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

  KPI1Data: any = [{}];

  KRI1Data: any = [{
    cantidad: 26345,
  }]

  ngOnInit() {

    let KPI1Data = [];

    let ReadPromise = new Promise((resolve, reject) => {

          var numero, clave, dias, nivel, DRSE, motivo;
          $.get('assets/KPI_1.txt', function(data) {
            //console.log(data);
            var position = -1;
            var lines;
            numero = 1;
            //var lines = data.split(/\r\n|\r|\n/).length;
            KPI1Data.push({numero: "NUMERO", clave: "CLAVE", dias: "DIAS EN ESPERA", nivel: "NIVEL EDUCATIVO", DRSE: "DRSE", motivo: "MOTIVO"});
            do {
              position = data.search("\t");

              if(position < 0)
              {
                break;
              }

              lines = data.substr(0,position);
              clave = lines;

              data = data.substr(position+1);
              position = data.search("\t");
              lines = data.substr(0,position);
              dias = lines;

              data = data.substr(position+1);
              position = data.search("\t");
              lines = data.substr(0,position);
              nivel = lines;

              data = data.substr(position+1);
              position = data.search("\t");
              lines = data.substr(0,position);
              DRSE = lines;

              data = data.substr(position+1);
              position = data.search("\n");
              lines = data.substr(0,position);
              motivo = lines;

              data = data.substr(position+1);

              KPI1Data.push({numero: numero, clave: clave, dias: dias, nivel: nivel, DRSE: DRSE, motivo: motivo});
              numero++;
          }while(position > 0);
            resolve(KPI1Data);

          }, 'text');
    });


    ReadPromise.then((successMessage) => {
      // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
      // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
      this.KPI1Data = successMessage;
      //console.log(KPI1Data);
    });


    }

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
