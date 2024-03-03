import { HttpClient } from '@angular/common/http';
import { PurchaceModel } from '../Models/Purchace.model';
import { Injectable } from '@angular/core';
@Injectable({providedIn:'root'})
export class PurchaceService{
   baseUrl:string="http://cpc.somee.com/api/";
   
    constructor(private http:HttpClient) {
     
    }
    getPurchaces(){
      return this.http.get<PurchaceModel[]>(this.baseUrl+"purchace");
    }
    addPurchace(data:PurchaceModel){
        return this.http.post(this.baseUrl+"purchace/add",data);
    }
}