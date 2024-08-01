import { Media } from "../character/characters";
import { Loot } from "../Enums";
import { QuestItemNames } from "../quests/questItems";

export type Monster = {
  hp: number;
  attack: number;
  media: Media;
  loot: (Loot | QuestItemNames)[];
  xp: number;
  level: number;
};

export type MonstersList = {
  [ket: string]: Monster;
};

export enum MonsterNames {
  FeatherLeaf = "Feather Leaf",
  Siren = "Siren",
  AbyssalSeahorse = "Abyssal Seahorse",
  SnakeWoman = "Naga Queen",
  DarkDruid = "Dark Druid",
}

export const MonstersList: MonstersList = {
  "Feather Leaf": {
    hp: 50,
    attack: 5,
    media: {
      src: "./assets/enemies/featherLeaf.png",
      alt: "Image of a small little green furry monster",
    },
    loot: [
      Loot.FeatherLeafSkeleton,
      Loot.FeatherLeafFluid,
      QuestItemNames.FeatherLeafMeat,
    ],
    xp: 10,
    level: 1,
  },
  Siren: {
    hp: 100,
    attack: 10,
    media: {
      src: "./assets/enemies/siren.png",
      alt: "Image of a siren",
    },
    loot: [Loot.SirenSkull, Loot.SirenScale],
    xp: 25,
    level: 2,
  },
  "Abyssal Seahorse": {
    hp: 100,
    attack: 25,
    media: {
      src: "./assets/enemies/abyssalSeahorse.png",
      alt: "Image of an abyssal seahorse",
    },
    loot: [QuestItemNames.KeyOne],
    xp: 25,
    level: 2,
  },
  "Dark Druid": {
    hp: 200,
    attack: 20,
    media: {
      src: "./assets/enemies/darkDruid.png",
      alt: "Image of an abyssal seahorse",
    },
    loot: [QuestItemNames.KeyTwo],
    xp: 45,
    level: 3,
  },
  "Naga Queen": {
    hp: 500,
    attack: 50,
    media: {
      src: "./assets/enemies/snakeWoman.png",
      alt: "Image of an abyssal seahorse",
    },
    loot: [QuestItemNames.keyThree],
    xp: 100,
    level: 5,
  },
};
