import { Birds } from './Birds.js';

class Dragonfly extends Birds {
    constructor(name, color) {
        super(name, color);
        this.breed = 'insect';
        this.sound = 'trrrr 🐉!';
        this.body = 'body'
       // this.imposter = true;
    }
}

export { Dragonfly }