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
  SecondBoss = "Eagle Queen",
  ThirdBoss = "Mirewalker",
  FourthBoss = "Grim Lurker",
  FifthBoss = "Marasnake",
  SixthBoss = "Dragon",
  FruitMonster = "Fromster",
  Squirmoth = "Squirmoth",
  Zu = "Zu",
  GlowfinMinnow = "Glowfin Minnow",
  HellmawPiranha = "Hellmaw Piranha",
  Niffler = "Niffler",
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
    hp: 150,
    attack: 15,
    media: {
      src: "./assets/enemies/siren.png",
      alt: "Image of a siren",
    },
    loot: [Loot.SirenSkull, Loot.SirenScale],
    xp: 0,
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
  "Eagle Queen": {
    hp: 250,
    attack: 25,
    media: {
      src: "./assets/enemies/eagle.png",
      alt: "Image of a big color full eagle",
    },
    loot: [Loot.EagleSkull],
    xp: 25,
    level: 2,
  },
  Mirewalker: {
    hp: 400,
    attack: 35,
    media: {
      src: "./assets/enemies/monster.png",
      alt: "Image of a big monster",
    },
    loot: [Loot.MirewalkerSkull],
    xp: 45,
    level: 3,
  },
  "Grim Lurker": {
    hp: 600,
    attack: 45,
    media: {
      src: "./assets/enemies/snakeMonster.png",
      alt: "Image of a big snake monster",
    },
    loot: [Loot.GrimLurkerPoison],
    xp: 70,
    level: 4,
  },
  Marasnake: {
    hp: 800,
    attack: 60,
    media: {
      src: "./assets/enemies/waterMonster.png",
      alt: "Image of a big Water Monster, snake.",
    },
    loot: [Loot.MarasnakeSkull],
    xp: 100,
    level: 5,
  },
  Dragon: {
    hp: 1000,
    attack: 80,
    media: {
      src: "./assets/enemies/dragon.png",
      alt: "Image of a big blue dragon",
    },
    loot: [Loot.DragonSkull, Loot.DragonEgg],
    xp: 80,
    level: 6,
  },
  Fromster: {
    hp: 100,
    attack: 10,
    media: {
      src: "./assets/enemies/fruitMonster.png",
      alt: "Image of a fruit monster",
    },
    loot: [QuestItemNames.ForbiddenFruit],
    xp: 25,
    level: 2,
  },
  Squirmoth: {
    hp: 300,
    attack: 30,
    media: {
      src: "./assets/enemies/tentacleMonster.png",
      alt: "Image of a tentacle monster, Squirmoth",
    },
    loot: [QuestItemNames.BårdsChest],
    xp: 70,
    level: 4,
  },
  Zu: {
    hp: 500,
    attack: 50,
    media: {
      src: "./assets/enemies/zu.png",
      alt: "Image of a giant bird, the enemy of the Chocobo",
    },
    loot: [Loot.ZuSkull, Loot.Ring],
    xp: 100,
    level: 5,
  },
  "Glowfin Minnow": {
    hp: 50,
    attack: 5,
    media: {
      src: "./assets/enemies/fish.png",
      alt: "Image of a fish",
    },
    loot: [Loot.GlowfinMinnowMeat],
    xp: 10,
    level: 1,
  },
  "Hellmaw Piranha": {
    hp: 200,
    attack: 20,
    media: {
      src: "./assets/enemies/BigFish.png",
      alt: "Image of a big fish",
    },
    loot: [Loot.HellmawPiranhaMeat],
    xp: 45,
    level: 3,
  },
  Niffler: {
    hp: 100,
    attack: 10,
    media: {
      src: "./assets/enemies/niffler.png",
      alt: "Image of a big fish",
    },
    loot: [QuestItemNames.VillagersChest, QuestItemNames.VillagersNecklace],
    xp: 25,
    level: 2,
  },
};
