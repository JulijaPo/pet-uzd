import {Animal} from './Animal.js'
class Fish extends Animal{
    constructor(name, color) {
        super(name, color)
        this.canswim = true
        this.environment = 'water'; 
    }
swimAway() {if(this.canswim === false ){
            console.log(`Run ${this.breed} ${this.name}, run! 🍣🍽`)
        } else{
            console.log(`Swimaway ${this.breed} ${this.name}!`)
        }      
    }
}

export { Fish }

