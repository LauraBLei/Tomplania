import { Media } from "../character/characters";

export type MonsterLoot = {
  name: string;
  type: string;
  cost: number;
  dropChance: number;
  media: Media;
};

export type MonsterLootListType = {
  [key: string]: MonsterLoot;
};

export const MonsterLootList: MonsterLootListType = {
  "Feather Leaf Skeleton": {
    name: "Feather Leaf Skeleton",
    type: "loot",
    cost: 2,
    dropChance: 1,
    media: {
      src: "./assets/items/monsterLoot/15.png",
      alt: "Image of a Feather Leaf Skull",
    },
  },
  "Feather Leaf Fluid": {
    name: "Feather Leaf Fluid",
    type: "loot",
    cost: 5,
    dropChance: 0.5,
    media: {
      src: "./assets/items/Potions/potion4.png",
      alt: "Image of a green potion bottle with leafs on it",
    },
  },
  "Siren Skull": {
    name: "Siren Skull",
    type: "loot",
    cost: 30,
    dropChance: 0.7,
    media: {
      src: "./assets/items/monsterLoot/icon8.png",
      alt: "Image of a siren skull",
    },
  },
  "Siren Scale": {
    name: "Siren Scale",
    type: "loot",
    cost: 50,
    dropChance: 0.3,
    media: {
      src: "./assets/items/monsterLoot/Icon38.png",
      alt: "Image of a siren skull",
    },
  },
};
