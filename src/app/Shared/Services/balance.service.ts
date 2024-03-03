import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BalanceModel } from '../Models/balace.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  baseUrl:string="http://cpc.somee.com/api/";
   
  constructor(private http:HttpClient) {
   
  }
  getBalance(month:number){
    return this.http.get<number>(this.baseUrl+"Balance/"+month);
  }
  addBalance(data:BalanceModel){
      return this.http.post(this.baseUrl+"Balance/add",data);
  }
 
}
