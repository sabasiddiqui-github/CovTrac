import { Component, Input, OnInit } from '@angular/core';
import { CountrywideDailyAggregate } from 'src/app/models/countrywide-daily-aggregate.model';
import { SelectBarComponent } from '../select-bar/select-bar.component';

@Component({
  selector: 'app-datewise-table',
  templateUrl: './datewise-table.component.html',
  styleUrls: ['./datewise-table.component.css']
})
export class DatewiseTableComponent implements OnInit{
  @Input()
  selectedData:any;

  @Input()
  scope : any;
  


  constructor() { 

  }

  ngOnInit(): void {
   //var select=new SelectBarComponent();
   //this.selected.push(select.selectedCountryData);
}



}
