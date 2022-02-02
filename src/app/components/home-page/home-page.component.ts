import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from "../../services/global-data.service";
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import {WorldwideDailyAggregate} from "../../models/worldwide-daily-aggregate.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  globalData: WorldwideDailyAggregate[] = [];
  tableData: any[] = [];
  pieChart: GoogleChartInterface = {
    chartType : 'PieChart'
  };
  columnChart: GoogleChartInterface = {
    chartType : 'ColumnChart'
  };

  constructor(private globalDataService : GlobalDataService) { }

  ngOnInit(): void{
    this.getAllGlobalData();
    this.pieChart = {
      chartType: GoogleChartType.PieChart,
      dataTable: this.tableData,
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
    this.columnChart = {
      chartType: GoogleChartType.ColumnChart,
      dataTable: this.tableData,
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
    
  }

  getAllGlobalData(){
    this.globalDataService.getGlobalData().subscribe((data: any) => {
      this.globalData = data;
      this.tableData.push(['Date', 'Cases']);
      for (let i = 2; i < 9; i++) {
        this.tableData.push([this.globalData[this.globalData.length - i].date, Number(this.globalData[this.globalData.length - i].confirmed)]);
      }
    //  this.globalData.forEach((row : any) => {
    //    this.tableData.push([row.date, Number(row.confirmed)]);
    //  });
      console.log(this.tableData);
    });
  }

}
