import { Birds } from './Birds.js';

class Chicken extends Birds {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Bird';
        this.sound = 'Kokoko 🐓!';
        this.body = 'feathers'
    }
}

export { Chicken }