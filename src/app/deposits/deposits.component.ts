import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepositModel } from '../Shared/Models/deposite.model';
import { DepositService } from '../Shared/Services/deposit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit, OnDestroy {
  date: Date = new Date()
  monthName: number | undefined

  depositData: DepositModel[] | undefined;
  priceType: string = ""
  depositDate: Date = new Date()
  price: number = 0
  addDepositSub:Subscription | undefined;
  getDepositSub: Subscription | undefined;
  /**
   *
   */
  constructor(private depositService: DepositService,private router:Router) {
    this.monthName = this.date.getMonth() + 1;
  }

  ngOnInit(): void {
    this.getDepositSub = this.depositService.getDeposits().subscribe(res => {
      this.depositData = res;
    })
 
  }

  getTotalPrice(): number {
    return this.depositData!.reduce((total, deposit) => total + deposit.price!, 0);
  }
  onSubmit() {
  
    const data = new DepositModel(this.price,this.priceType, this.depositDate)
    this.addDepositSub = this.depositService.addDeposit(data).subscribe({
      next: (res) =>
        this.ngOnInit()
      , error: (error) => { alert(error.message) }
    });

    this.ngOnInit()
  }

  onBack(){
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    this.getDepositSub?.unsubscribe();
    this.addDepositSub?.unsubscribe();
  }
} 
  
