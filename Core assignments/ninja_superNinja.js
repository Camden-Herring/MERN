class Ninja{
    constructor(name, health, speed, strength){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    }

    say_name(){
        console.log(`This ninja's name is: ${this.name}`);
    }

    show_stats(){
        console.log(`This ninja's speed is: ${this.speed}\nThis ninja's strength is: ${this.strength}`)
    }

    drink_sake(){
        this.health += 10
        console.log(`This ninja's health is now ${this.health}`)
    }
}

const ninja1 = new Ninja("Camden");

ninja1.say_name();
ninja1.drink_sake();
ninja1.show_stats();