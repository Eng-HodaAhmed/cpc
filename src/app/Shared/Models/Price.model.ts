export class PriceModel {
    solarPrice!: number 
    petrol80Price!: number
    petrol92Price!: number
    date!: Date
    /**
     *
     */
    constructor(solar:number,petrol80:number,petrol92:number,date:Date) {
       this.solarPrice=solar,
       this.petrol80Price=petrol80,
       this.petrol92Price=petrol92,
       this.date=date
    }
}