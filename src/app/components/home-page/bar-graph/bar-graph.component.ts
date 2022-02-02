import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { WorldwideDailyAggregate } from 'src/app/models/worldwide-daily-aggregate.model';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @Input()
  tableData: any[] = [];

  columnChart: GoogleChartInterface = {
    chartType : 'ColumnChart'
  };

  constructor() {}

  ngOnInit(): void{
    this.columnChart = {
      chartType: GoogleChartType.ColumnChart,
      dataTable: this.tableData,
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
  }


}
