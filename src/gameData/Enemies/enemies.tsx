import { Media } from "../character/characters";
import { Loot } from "../Enums";
import { QuestItemNames } from "../quests/questItems";

export type Monster = {
  hp: number;
  attack: number;
  media: Media;
  loot: (Loot | QuestItemNames)[];
  xp: number;
};

export type MonstersList = {
  [ket: string]: Monster;
};

export enum MonsterNames {
  FeatherLeaf = "Feather Leaf",
  Siren = "Siren",
}

export const MonstersList: MonstersList = {
  "Feather Leaf": {
    hp: 100,
    attack: 5,
    media: {
      src: "./assets/enemies/jellyMonster.png",
      alt: "Image of a small little green furry monster",
    },
    loot: [
      Loot.FeatherLeafSkeleton,
      Loot.FeatherLeafFluid,
      QuestItemNames.FeatherLeafMeat,
    ],
    xp: 5,
  },
  Siren: {
    hp: 250,
    attack: 30,
    media: {
      src: "./assets/enemies/siren.png",
      alt: "Image of a siren",
    },
    loot: [Loot.SirenSkull, Loot.SirenScale],
    xp: 10,
  },
};
