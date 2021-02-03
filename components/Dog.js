import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Lietuvos lenciuginis';
        this.sound = 'Au au 🐕‍🦺🐕‍🦺!';
        this.body = 'fur'
    }
}

export { Dog }