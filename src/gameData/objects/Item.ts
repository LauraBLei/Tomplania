import { Media } from "../character/characters";

export class Item {
  // Required properties
  name: string;
  media: Media;
  description: string;
  type: string;

  // Optional properties
  hp?: number;
  attack?: number;
  cost?: number;
  dropChance?: number;
  heal?: number;
  mana?: number;
  job?: string;

  constructor({
    name,
    media,
    description,
    type,
    hp,
    attack,
    cost,
    dropChance,
    heal, 
    mana,
    job
  }: Item) {
    this.name = name;
    this.media = media;
    this.description = description;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.cost = cost;
    this.dropChance = dropChance;
    this.heal = heal;
    this.mana = mana
    this.job = job
  }
}
