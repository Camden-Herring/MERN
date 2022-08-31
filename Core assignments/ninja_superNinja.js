class Ninja{
    constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    }

    say_name(){
        console.log(`${this.name}'s name is: ${this.name}`);
    }

    show_stats(){
        console.log(`---------------------STATS----------------\n${this.name}'s speed is: ${this.speed}\n${this.name}'s strength is: ${this.strength}\n${this.name}'s health is ${this.health}`)
    }

    drink_sake(){
        this.health += 10
        console.log(`${this.name}'s health is now ${this.health}`)
    }
}

const ninja1 = new Ninja("Camden");

// ninja1.say_name();
// ninja1.drink_sake();
// ninja1.show_stats();

class Sensei extends Ninja{
    constructor (name, wisdom){
        super(name)
        this.wisdom = 10;
        this.speed = 10;
        this.health = 200;
        this.strength = 10;
    }

    speak_wisdom(){
        super.drink_sake();
        console.log("Confidence is the ability to let your humility supress your ego, while remaining powerful and energetic.")
    }
}

const Sensei1 = new Sensei("Jesus");

Sensei1.say_name();
Sensei1.speak_wisdom();
Sensei1.show_stats();
