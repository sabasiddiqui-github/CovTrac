import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { GoogleChartInterface,GoogleChartType} from 'ng2-google-charts';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit{
   @Input()
   data: any;
  //lineChart:GoogleChartInterface={
    //chartType:'LineChart'
  //};
  constructor() {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
 

}