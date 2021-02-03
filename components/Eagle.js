import { Birds } from './Birds.js';

class Eagle extends Birds {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Bird';
        this.sound = '🦅';
        this.body = 'feathers'
    }
}

export { Eagle }