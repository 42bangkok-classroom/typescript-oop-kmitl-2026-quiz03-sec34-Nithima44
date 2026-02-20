export class Character {
    name?: string;
    health?: number=100;

    constructor(name: string) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
    getHealth(){
        return this.health;
    }
    receiveDamage(damage: number){
        if(this.health){
            this.health -= damage;
        }
    }
}
const character = new Character ("NPC");

console.log(character.getName());
console.log(character.getHealth());
console.log(character.receiveDamage(10));
