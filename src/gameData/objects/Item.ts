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
  }
}

// export type NewItemType = {
//   name: string;
//   media: Media;
//   description: string;
//   type: string;
//   hp?: number;
//   attack?: number;
//   cost?: number;
//   dropChance?: number;
//   heal: number;
// };

// export type GearType = {
//   name: string;
//   media: Media;
//   description: string;
//   type: string;
//   hp?: number;
//   attack?: number;
//   cost?: number;
//   dropChance?: number;
//   heal: number;
// };

// export class Item {
//   // Required properties
//   name: string;
//   media: Media;
//   description: string;
//   type: string;

//   constructor(name: string, media: Media, description: string, type: string) {
//     this.name = name;
//     this.media = media;
//     this.description = description;
//     this.type = type;
//   }
// }

// export class Equipment extends Item {
//   hp?: number;
//   attack?: number;
//   cost?: number;

//   constructor({ name, media, description, type, hp, attack, cost }: GearType) {
//     super(name, media, description, type);
//     this.hp = hp;
//     this.attack = attack;
//     this.cost = cost;
//   }
// }

// export class Potion extends Item {
//   hp?: number;
//   attack?: number;
//   cost?: number;
//   heal?: number;

//   constructor({ name, media, description, type, hp, attack, cost, heal }: GearType) {
//     super(name, media, description, type);
//     this.hp = hp;
//     this.attack = attack;
//     this.cost = cost;
//     this.heal = heal
//   }
// }
