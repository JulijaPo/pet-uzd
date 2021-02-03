class Animal {
    constructor(name, color) {
       
        this.name = name;
        this.color = color;
        this.body = 'body'
        this.sound = 'Miau au nom 🐈🐕‍🦺🐹!';
        this.breed = 'Unknown animal';

    }
    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, my ${this.body}  is ${this.color} color and I say ${this.sound}`);
    }

}

export { Animal }