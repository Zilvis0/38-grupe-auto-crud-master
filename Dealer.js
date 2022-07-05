class Dealer {
    constructor(name, currency){
        this.name = name;
        this.currency = currency;
        this.carLot = [];
        this.balance = 0;
        this.soldCars = 0;
        console.log(`Hi, my name is ${this.name}!`)
    };

    priceTransform(money){
        return money.toLocaleString('de-DE');
    };

    getCar(brand, price){
        let newCar = {};
        newCar.brand = brand;
        newCar.price = price;
        this.carLot.push(newCar);
        console.log(`New car everyone! ${brand} for only ${this.priceTransform(price)} ${this.currency}!`)
    };

    carList(){
        let introSpeach = `${this.name}'s car dealership:`
        let longest = introSpeach.length;
        let dashes = "";
        let carOptions = "";
        if (this.carLot.length!==0){
            for (let i=0; i<this.carLot.length; i++){
                let tempHolding = `${this.carLot[i].brand}: ${this.priceTransform(this.carLot[i].price)} ${this.currency}.`
                carOptions+=`\n${i+1}) ${tempHolding}`
                if (tempHolding.length>longest){
                    longest = tempHolding.length;
                }
            }
        } else {
            carOptions = `\nSORRY! No cars for sale :(`
            if (carOptions.length>longest){
                longest = carOptions.length;
            };
        }
        dashes = "=".repeat(longest)
        console.log(`${introSpeach}\n${dashes}${carOptions}`);
    };

    changeCarPrice(carIndex, newPrice){
        this.carLot[carIndex-1].price = newPrice;
        console.log(`New ${this.carLot[carIndex-1].brand} price is ${this.priceTransform(this.carLot[carIndex-1].price)} ${this.currency}.`)
    };

    sellCar(sellingIndex){
        if (sellingIndex-1>this.carLot.length){
            console.log(`SORRY! There is no such car for sale :(`);
        } else {
            this.soldCars++;
            console.log(`Wow! ${this.carLot[sellingIndex-1].brand} sold for ${this.priceTransform(this.carLot[sellingIndex-1].price)} ${this.currency}!`);
            this.balance += this.carLot[sellingIndex-1].price; 
            this.carLot = this.carLot.filter(car=>car.brand!==this.carLot[sellingIndex-1].brand);
        }
    };

    fortune(){
        let singleOrMoreCars = "";
        if (this.soldCars===1){
            singleOrMoreCars = "car";
        } else {
            singleOrMoreCars = "cars";
        };
        console.log(`${this.name} has sold ${this.soldCars} ${singleOrMoreCars} for total of ${this.priceTransform(this.balance)} ${this.currency}!`);
    };
}

export { Dealer }