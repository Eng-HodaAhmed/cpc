import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepositModel } from '../Models/deposite.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  baseUrl:string="http://cpc.somee.com/api/";
   
  constructor(private http:HttpClient) {
   
  }
  getDeposits(){
    return this.http.get<DepositModel[]>(this.baseUrl+"Deposit");
  }
  addDeposit(data:DepositModel){
      return this.http.post(this.baseUrl+"Deposit/add",data);
  }
}