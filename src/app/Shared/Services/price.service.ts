import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PriceModel } from '../Models/Price.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  baseUrl:string="http://cpc.somee.com/api/";
   
  constructor(private http:HttpClient) {
   
  }
  getPrice(){
    return this.http.get<PriceModel>(this.baseUrl+"price");
  }

  addPrice(data:PriceModel){
    return this.http.post(this.baseUrl+"price/add",data);
  }
}
