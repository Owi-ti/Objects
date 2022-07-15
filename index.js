class Kioks{
    constructor(price){
       this.price=price,
       this.totalprice=function(fruitname,quantity){
        let k= price*quantity
        return `${quantity} ${fruitname} for KES ${k}`
       }
       
    }
}

var fruit= new Kioks(40.00);
console.log(fruit.totalprice ("Bananas",2));


class KioksCalc{
    constructor(fruit,quantity){ 
        this.fruit=fruit,
        this.quantity=quantity
        this.fruitPriceList=
        { "orange": 30, "mango": 15, "avocado": 40 }

      this.getTotalCost=function(){ 
      return `${quantity} ${fruit} for KES ${quantity*this.price}`
}
    }
}
KioksCalc.prototype.price=60;
var kioks= new KioksCalc("orange",4);
console.log(kioks.getTotalCost());
