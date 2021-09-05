import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _http: HttpClient) { }
  getChartData() {
     return this._http.get("https://run.mocky.io/v3/a4e8d606-5ad5-4abc-89be-fc4aab52155a").pipe(map((result: any) => result));
  
     }

  public getTableData(): Observable<any> {
    return this._http.get("https://run.mocky.io/v3/a4e8d606-5ad5-4abc-89be-fc4aab52155a");
  }

}
