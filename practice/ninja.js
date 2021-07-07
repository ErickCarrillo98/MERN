class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
    }

    sayName(){
        console.log("ninjas name is", this.name);
    }

    showStats(){
        console.log(this.name, this.health, this.speed, this.strength);
    }

    drinkSnake(){
        this.health += 10;
    }
}
    const ninja1 = new Ninja("GI");
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSnake();