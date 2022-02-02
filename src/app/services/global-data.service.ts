import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {WorldwideDailyAggregate} from "../models/worldwide-daily-aggregate.model";

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  dataUrl: any = "https://raw.githubusercontent.com/datasets/covid-19/main/data/worldwide-aggregate.csv";
  globalData: WorldwideDailyAggregate[] = [];

  constructor(private http : HttpClient) {
    this.http.get(this.dataUrl, {responseType : "text"}).pipe(
      map((result)=> {
        let rows = result.split('\n');
        rows.forEach((row)=>{
          let cols = row.split(/,(?=\S)/)
          this.globalData.push(
            {
              date: cols[0],
              confirmed: cols[1],
              recovered: cols[2],
              deaths: cols[3],
              increaseRate: cols[4]
            }
          );
        })
        return this.globalData})
    );
  }

  getGlobalData(){
    //return this.globalData;
    return this.http.get(this.dataUrl, {responseType : "text"}).pipe(
      map((result)=> {
        let rows = result.split('\n');
        rows.splice(0, 1);
        rows.forEach((row)=>{
          let cols = row.split(/,(?=\S)/)
          this.globalData.push(
            {
              date: cols[0],
              confirmed: cols[1],
              recovered: cols[2],
              deaths: cols[3],
              increaseRate: cols[4]
            }
          );
        })
      return this.globalData;})
    );
  }

  getGlobalIncRate(){
    return this.globalData[this.globalData.length - 1].increaseRate;
  }

  getGlobalConfirmed(){
    return this.globalData[this.globalData.length - 1].confirmed;
  }

  getGlobalRecovered(){
    return this.globalData[this.globalData.length-1].recovered;
  }

  getGlobalDeaths(){
    return this.globalData[this.globalData.length-1].deaths;
  }
}
