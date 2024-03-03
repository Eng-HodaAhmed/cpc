export class BalanceModel{
    balance:number | undefined 
    month:number | undefined
    /**
     *
     */
    constructor(balance:number,month:number) {
        
        this.balance=balance,
        this.month=month
    }
}