import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PriceService } from '../Shared/Services/price.service';
import { Observable, Subscription } from 'rxjs';
import { PriceModel } from '../Shared/Models/Price.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit,OnDestroy{

solarPrice: number =0;
petrol80Price: number=0;
petrol92Price: number =0;
date:Date=new Date();
priceSubscribtion:Subscription|undefined;


/**
 *
 */
constructor(private priceService:PriceService,private router:Router) {

}


ngOnInit(): void {
  this.priceSubscribtion=this.priceService.getPrice().subscribe(res=>{
    this.solarPrice=res.solarPrice;
    this.petrol80Price=res.petrol80Price;
    this.petrol92Price=res.petrol92Price;
    
  })

}


onSubmit() {
  var data=new PriceModel(this.solarPrice,this.petrol80Price,this.petrol92Price,this.date)
  console.log(".........",data)
  this.priceService.addPrice(data).subscribe(res=>{console.log(res);
  this.router.navigate([''])});
  
}
onBack(){
  this.router.navigate(['']);
}
ngOnDestroy(): void {
  this.priceSubscribtion?.unsubscribe();
}

}
