import { Dog } from './components/Dog.js';
import { Nemo } from './components/Nemo.js';
import { GoldFish } from './components/GoldFish.js';
import { Chicken} from './components/Chicken.js'

const rexas = new Dog('Rexas', 'brown');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new GoldFish('Ariele', 'blue');
const riaba = new Chicken('Riaba', 'brown')


riaba.flyAway()
nemo.swimAway();
nemo.introduce();
console.log(riaba)
console.log(rexas);
ariele.voice();
rexas.introduce();
ariele.makeWish('Gyvo drakono');
