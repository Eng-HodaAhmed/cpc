import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PurchaceService } from '../Shared/Services/purchaces.services';
import { Subscription } from 'rxjs';
import { PurchaceModel } from '../Shared/Models/Purchace.model';
import { NgForm } from '@angular/forms';
import { PriceService } from '../Shared/Services/price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit, OnDestroy {
  date: Date = new Date()
  monthName: number | undefined
  getPurchace: Subscription | undefined;
  addPurchace: Subscription | undefined;
  purchacesData: PurchaceModel[] | undefined;
  productName: string = ""
  quantity: number | undefined;
  arriveDate: Date = new Date()
  price: number = 0
  solarPrice: number = 0;
  petrol80Price: number = 0;
  petrol92Price: number = 0
  getPriceSub: Subscription | undefined;
  /**
   *
   */
  constructor(private purchaceService: PurchaceService, private priceService: PriceService,private router:Router) {
    this.monthName = this.date.getMonth() + 1;
  }

  ngOnInit(): void {
    this.getPurchace = this.purchaceService.getPurchaces().subscribe(res => {
      this.purchacesData = res;
    })
    this.getPriceSub = this.priceService.getPrice().subscribe(
      res => {
        this.solarPrice = res.solarPrice;
        this.petrol80Price = res.petrol80Price;
        this.petrol92Price = res.petrol92Price;
      }
    )
  }

  getTotalPrice(): number {
    return this.purchacesData!.reduce((total, purchase) => total + purchase.price!, 0);
  }
  onSubmit() {
    switch (this.productName) {
      case "سولار":
        this.price = this.quantity! * this.solarPrice
        break;
      case "بنزين80":
        this.price = this.quantity! * this.petrol80Price;
        break;
      case "بنزين92":
        this.price = this.quantity! * this.petrol92Price;
        break;
    }

    const data = new PurchaceModel(this.productName, this.quantity!, this.arriveDate, this.price)
    this.addPurchace = this.purchaceService.addPurchace(data).subscribe({
      next: (res) =>
      this.ngOnInit()
      , error: (error) => { alert(error.message) }
    });

   
  }
  onBack(){
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    this.getPurchace?.unsubscribe();
  }
}
