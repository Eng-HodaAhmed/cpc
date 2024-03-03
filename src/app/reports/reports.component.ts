import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepositService } from '../Shared/Services/deposit.service';
import { PurchaceService } from '../Shared/Services/purchaces.services';
import { BalanceService } from '../Shared/Services/balance.service';
import { Subscription, map } from 'rxjs';
import { BalanceModel } from '../Shared/Models/balace.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit,OnDestroy {
  date: Date = new Date()
  monthName: number =0
previousBalance:number=0;
totalDeposits: number=0;
totalPurchaces: number=0;
totalBalance: number=0;
balanceSub:Subscription|undefined;
purchaceSub:Subscription|undefined;
depositSub:Subscription|undefined;
  /**
   *
   */
  constructor(private depositService :DepositService,private purchaceService:PurchaceService,
    private balanceService:BalanceService,private router:Router) {
    this.monthName = this.date.getMonth() + 1;
  }
 
  ngOnInit(): void {
   this.balanceSub= this.balanceService.getBalance(this.monthName-1).subscribe(res=>{
    console.log(res)
    this.previousBalance=res});
   this.depositSub=this.depositService.getDeposits().pipe(map(res=>{
    return res.reduce((total,dep)=>total+dep.price!,0)
   })).subscribe(res=>this.totalDeposits=res);
   this.purchaceSub=this.purchaceService.getPurchaces().pipe(map(res=>{
    return res.reduce((total,purchace)=>total+purchace.price!,0)
   })).subscribe(res=>{this.totalPurchaces=res;
    this.totalBalance=this.previousBalance+this.totalDeposits-this.totalPurchaces;
   });
   
  }
  onSave(){
    var data=new BalanceModel(this.totalBalance,this.monthName)
    this.balanceService.addBalance(data).subscribe(res=>{
    this.router.navigate(['/']);
    });
  }
  onBack(){
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    this.depositSub?.unsubscribe();
    this.balanceSub?.unsubscribe();
    this.purchaceSub?.unsubscribe()

  }
}
