import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  @Input()
  data : any;

  pieChart: GoogleChartInterface = {
    chartType : 'PieChart'
  };

  constructor() {}

  ngOnInit(): void {
    
    this.pieChart = {
      chartType: GoogleChartType.PieChart,
      dataTable: [
        ['Country', 'Cases'],
        ['US', 1100090],
        ['UK', 2765675],
        ['Canada', 2759897],
        ['Pakistan', 277508],
        ['Austrailia', 759857]
      ],
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
  }

}
