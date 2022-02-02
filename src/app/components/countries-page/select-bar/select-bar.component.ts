import { Component, Input, OnInit, Output } from '@angular/core';
import { CountrywideDailyAggregate } from 'src/app/models/countrywide-daily-aggregate.model';
import { WorldwideDailyAggregate } from 'src/app/models/worldwide-daily-aggregate.model';
import { CountrywideDataService } from 'src/app/services/countrywide-data.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.css']
})
export class SelectBarComponent implements OnInit {
  countryData:CountrywideDailyAggregate[] = [];
  countries:string[]=[];
  selectedCountryData:any=[];
  
  @Input()
  data:any;
  @Output() public sendData=new EventEmitter();
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit('Saba')
    
    }
  
  updateValue(country:any){
    console.log(country);
    this.selectedCountryData=this.countryData[country];
    //console.log(this.selectedCountryData);
    //return this.selectedCountryData;
    //this.sendData.emit(country);
  

  }
 
      
      
      
      
     
      
      

      
      //this.countries.push(this.countryData[this.countryData.length -1].country);
      //console.log(this.countries);


}
