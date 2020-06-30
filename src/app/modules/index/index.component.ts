import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  //Deixar dinamico
  public barChartLabels: string[] = ['dez-2019', 'jan-2020', 'fev-2020', 'mar-2020', 'abr-2020', 'mai-2020', 'jun-2020'];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: any[] = [
    //Deixar dinamico
    { data: [6500, 5900, 8000, 8100, 5600, 5500, 4000], label: 'Imoveis Disponíveis' },
    { data: [2800, 4800, 4000, 1900, 8600, 2700, 9000], label: 'Alugados' }
  ];

  // Doughnut
  //Deixar dinamico
  public doughnutChartLabels: string[] = ['Disponíveis', 'Alugados', 'Aguadando Documentação'];
  public doughnutChartData: number[] = [3500, 4500, 1000];
  public doughnutChartType: string;

  constructor() { }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.doughnutChartType = 'doughnut';
  }

}
