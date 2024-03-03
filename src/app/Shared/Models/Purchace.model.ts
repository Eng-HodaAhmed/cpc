export class PurchaceModel{
    id: number | undefined
    quantity:number | undefined
    date:Date | undefined
    productName:string | undefined
    price :number | undefined
    /**
     *
     */
    constructor(name:string,quantity:number,date:Date,price:number) {
       this.date=date;
       this.price=price;
       this.productName=name;
       this.quantity=quantity;
        
    }
}