import {Animal} from './Animal.js'
class Birds extends Animal{
    constructor(name, color) {
        super(name, color)
        this.environment = 'air';
        this.wingsCount =  2
        this.canFly = false
           }

    flyAway(){if(this.canFly === false || this.wingsCount % 2 !== 0 ){
        console.log(`Run ${this.breed} ${this.name}, run! 🍗🍽`)
    } else{
        console.log(`Flyaway ${this.breed} ${this.name}!`)
    }
}
}
    


export { Birds  }
