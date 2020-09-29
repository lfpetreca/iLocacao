import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels: string[] = ['jul-2020', 'ago-2020', 'set-2020', 'nov-2020', 'dez-2020', 'jan-2021', 'fev-2021'];
  public lineChartType: string;

  public lineChartData: any[] = [
    { data: [6, 5, 8, 8, 5, 5, 8], label: 'Sent' },
    { data: [8, 4, 5, 9, 6, 7, 9], label: 'Recived' }
  ];

  // Pie chart
  // Deixar dinamico
  public pieChartLabels: string[] = ['Sent', 'Recived', 'Waiting Documents'];
  public pieChartData: number[] = [3, 4, 1];
  public pieChartType: string;

  constructor() { }

  ngOnInit(): void {
    this.lineChartType = 'line';
    this.pieChartType = 'pie';
  }

}
