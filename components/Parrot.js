import { Birds } from './Birds.js';

class Parrot extends Birds {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Bird';
        this.sound = '🦜';
        this.body = 'feathers'
    }
}

export { Parrot }