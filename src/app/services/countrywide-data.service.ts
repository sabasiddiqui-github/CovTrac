import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {CountrywideDailyAggregate} from "../models/countrywide-daily-aggregate.model";
import {WorldwideDailyAggregate} from "../models/worldwide-daily-aggregate.model";

@Injectable({
  providedIn: 'root'
})
export class CountrywideDataService {

  dataUrl: any = "https://raw.githubusercontent.com/datasets/covid-19/main/data/countries-aggregated.csv";
  countryData: CountrywideDailyAggregate[] = [];
  countries:string[]=[];
  //dw:CountrywideDailyAggregate[];
 
  

  constructor(private http : HttpClient) {}
  
    
  getDateWiseData() {
    return this.http.get(this.dataUrl, { responseType: 'text' })
      .pipe(map(result => {
        let rows = result.split('\n');
         console.log(rows);
        let mainData:any= {};
        let header = rows[0];
        let dates = header.split(/,(?=\S)/)
        dates.splice(0 , 4);
        rows.splice(0 , 1);
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)
          let con = cols[1];
          cols.splice(0 , 4);
          //console.log(con , cols);
          mainData[con] = [];
          
          cols.forEach((value , index)=>{
            let dw : CountrywideDailyAggregate = {
              date : new Date(Date.parse(dates[0])),
              country : con ,
              confirmed : cols[2],
              recovered:cols[3],
              
              deaths:cols[4]
             
              
              
              

            }
            mainData[con].push(dw);
            //console.log(value);
            //console.log(index);})
          
            
        })
      })
      console.log.apply(mainData);
        return mainData;

       
        
       
      }  ))
  
    }
  getCountryData(){
    //return this.globalData;
    return this.http.get(this.dataUrl, {responseType : "text"}).pipe(
      map((result)=> {
        let rows = result.split('\n');
        
        
        rows.splice(0, 1);
        rows.forEach((row)=>{
          let cols = row.split(/,(?=\S)/)
          this.countryData.push(
            {
              date: cols[0],
              country: cols[1],
              confirmed: cols[2],
              recovered: cols[3],
              deaths: cols[4]
            }
          );
          if (!this.countries.includes(cols[1])){
            this.countries.push(cols[1]);

          }
        })
        return [this.countryData,this.countries]})
      );
  }

  getCountry(){
    return this.countryData[this.countryData.length - 1].country;
  }

  getCountryConfirmed(){
    return this.countryData[this.countryData.length - 1].confirmed;
  }

  getCountryRecovered(){
    return this.countryData[this.countryData.length-1].recovered;
  }

  getCountryDeaths(){
    return this.countryData[this.countryData.length-1].deaths;
  
    
}
}
