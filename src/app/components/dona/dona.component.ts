import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title : string = 'Sin titulo';
  @Input() labels : string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input() datos : number[] = [ 350, 450, 100 ];
  

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Label 1', 'Label 2', 'Label 3' ],
    datasets: [
      { data: [ 350, 450, 100 ]},
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data : this.datos }
      ]
    }
  }

}
