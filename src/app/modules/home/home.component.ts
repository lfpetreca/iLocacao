import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
  ];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: any[] = [
    { data: [6500, 5900, 8000, 8100, 5600, 5500, 4000], label: 'Imoveis Disponíveis' },
    { data: [2800, 4800, 4000, 1900, 8600, 2700, 9000], label: 'Alugados' }
  ];

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Disponíveis',
    'Alugados',
    'Aguadando Documentação'
  ];
  public doughnutChartData: number[] = [3500, 4500, 1000];
  public doughnutChartType: string;

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  constructor() { }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.doughnutChartType = 'doughnut';
  }

}
