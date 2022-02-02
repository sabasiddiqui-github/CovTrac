import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { CountrywideDailyAggregate } from 'src/app/models/countrywide-daily-aggregate.model';
import { CountrywideDataService } from 'src/app/services/countrywide-data.service';
import { DatewiseTableComponent } from './datewise-table/datewise-table.component';
import { SelectBarComponent } from './select-bar/select-bar.component';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
  
})
export class CountriesPageComponent implements OnInit {
  countryData:CountrywideDailyAggregate[] = [];
  countries:string[]=[];
  selectedCountryData:CountrywideDailyAggregate[]=[];
  tableData: any[] = [];
  dataChart: any =[];
  cont: any = [];
  lineChart: GoogleChartInterface = {
    chartType : 'LineChart'
  };
  
  @Input()
  data:any;

  @Input() 
  selectedData:any;

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  
  constructor(private countrywideDataService:CountrywideDataService) { 
    //this.selectedCountryData:CountrywideDailyAggregate[]=[];
  }
  ngOnInit(): void {
    this.getAllCountrywideData();
    console.log(this.dataChart);
    this.lineChart = {
      chartType: GoogleChartType.LineChart,
      dataTable: this.dataChart,
      options: {
        height: 500
      }
    };

  
  }

  getAllCountrywideData(){
    this.countrywideDataService.getCountryData().subscribe((data: any) => {
      this.countryData = data[0];
      this.countries = data[1];
      this.countryData.forEach((con: any)=>{
        //console.log(Number(con.confirmed));
        if(Number(con.confirmed) != NaN && con.country != undefined){
          if (!this.cont.includes(con.country)){
            this.dataChart.push([`${con.country}`, Number(con.confirmed)]);
          }
        }
      });
    });
  
  }

  updateValue(country:any){
    console.log(country);
    this.countryData.forEach((cs:any)=>{
      if(cs.country == country){
        this.totalActive = cs.active
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
        this.selectedCountryData.push(cs);
        
      }
    });
    console.log(this.selectedCountryData);
    
  }
    
  
  } 
    
    
  


 
  


