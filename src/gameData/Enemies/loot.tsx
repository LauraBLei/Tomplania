// import { Media } from "../character/characters";
import { Item } from "../objects/Item";

// export type MonsterLoot = {
//   name: string;
//   type: string;
//   cost: number;
//   dropChance: number;
//   media: Media;
// };

// export type MonsterLootListType = {
//   [key: string]: MonsterLoot;
// };

export const MonsterLootList: Item[] = [
  {
    name: "Feather Leaf Skeleton",
    type: "loot",
    cost: 2,
    description: "description",
    dropChance: 1,
    media: {
      src: "./assets/items/monsterLoot/15.png",
      alt: "Image of a Feather Leaf Skull",
    },
  },
  {
    name: "Feather Leaf Fluid",
    type: "loot",
    cost: 5,
    description: "description",
    dropChance: 0.5,
    media: {
      src: "./assets/items/potions/potion4.png",
      alt: "Image of a green potion bottle with leafs on it",
    },
  },
  {
    name: "Siren Skull",
    type: "loot",
    cost: 30,
    description: "description",
    dropChance: 0.7,
    media: {
      src: "./assets/items/monsterLoot/8.png",
      alt: "Image of a siren skull",
    },
  },
  {
    name: "Siren Scale",
    type: "loot",
    cost: 50,
    description: "description",
    dropChance: 0.3,
    media: {
      src: "./assets/items/monsterLoot/Icon38.png",
      alt: "Image of a siren skull",
    },
  },
];
