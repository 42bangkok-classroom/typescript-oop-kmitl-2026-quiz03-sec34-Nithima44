import { Character } from "./character";

export class Warrior extends Character {
  // TODO: implement class properties, constructor with super(...), and methods
  weapon?: string;

  constructor(name?: string, weapon?: string, health?: number) {
    super(name ?? "");
    this.weapon = weapon;
    this.health = health;
  }
  getWeapon() {
    return this.weapon;
  }
}
