class uber{
    constructor(price,km){
      this.price=price
      this.km=km
    }
    Price_Calculation(){
    return this.price*this.km
    }
  }
  var price=new uber(17,18)
  console.log(price.Price_Calculation())