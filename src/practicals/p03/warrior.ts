import { Character } from "./character";

export class Warrior extends Character {
  weapon?: string;

  constructor(name?: string, weapon?: string, health?: number) {
    super(name ?? "");
    this.weapon = weapon;
    if (health !== undefined) {
      this.health = health;
    }
  }
  
  getWeapon() {
    return this.weapon;
  }
  
  receiveDamage(damage: number) {
    const reducedDamage = damage * 0.9;
    this.health -= reducedDamage;
  }
}
