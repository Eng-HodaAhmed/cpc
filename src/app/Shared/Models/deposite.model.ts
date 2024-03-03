export class DepositModel
{
    price: number | undefined
    date:Date | undefined
   priceType :string | undefined
   /**
    *
    */
   constructor(price:number,priceType:string,date:Date) {
   
    this.price=price;
    this.date=date;
    this.priceType=priceType
   }
}