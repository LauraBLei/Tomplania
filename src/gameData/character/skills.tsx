import { Media } from "./characters";

export type Skill = {
  name: string;
  description: string;
  level: number;
  job: string;
  attack: number;
  mana: number;
  media: Media;
};

export const sorcererSpells: Skill[] = [
  {
    name: "Whispering Wind",
    description: "",
    level: 1,
    job: "sorcerer",
    attack: 10,
    mana: 0,
    media: {
      src: "./assets/skills/windGust.png",
      alt: "wind spell",
    },
  },
  {
    name: "Whirlwind Summon",
    description: "",
    level: 2,
    job: "sorcerer",
    attack: 20,
    mana: 10,
    media: {
      src: "./assets/skills/tornado.png",
      alt: "wind spell",
    },
  },
  {
    name: "Wind Spirit",
    description: "",
    level: 3,
    job: "sorcerer",
    attack: 30,
    mana: 20,
    media: {
      src: "./assets/skills/bird.png",
      alt: "wind spell",
    },
  },
  {
    name: "Wind Gust",
    description: "",
    level: 4,
    job: "sorcerer",
    attack: 50,
    mana: 30,
    media: {
      src: "./assets/skills/windGust.png",
      alt: "wind spell",
    },
  },
  {
    name: "Aero Ball",
    description: "",
    level: 5,
    job: "sorcerer",
    attack: 60,
    mana: 40,
    media: {
      src: "./assets/skills/aeroBall.png",
      alt: "wind spell",
    },
  },
  {
    name: "Meteor Shower",
    description: "",
    level: 6,
    job: "sorcerer",
    attack: 90,
    mana: 90,
    media: {
      src: "./assets/skills/meteor.png",
      alt: "wind spell",
    },
  },
];

export const wizardSpells: Skill[] = [
  {
    name: "Ignite",
    description: "",
    level: 1,
    job: "Wizard",
    attack: 8,
    mana: 0,
    media: {
      src: "./assets/skills/ignite.png",
      alt: "wizard spell",
    },
  },
  {
    name: "Shocking Grasp",
    description: "",
    level: 2,
    job: "Wizard",
    attack: 16,
    mana: 10,
    media: {
      src: "./assets/skills/shockingGrasp.png",
      alt: "wizard spell",
    },
  },
  {
    name: "Fire Whip",
    description: "",
    level: 3,
    job: "Wizard",
    attack: 24,
    mana: 20,
    media: {
      src: "./assets/skills/fireWhip.png",
      alt: "wizard spell",
    },
  },
  {
    name: "Ghast",
    description: "",
    level: 4,
    job: "Wizard",
    attack: 32,
    mana: 30,
    media: {
      src: "./assets/skills/ghast.png",
      alt: "wizard spell",
    },
  },
  {
    name: "Fire Ball",
    description: "",
    level: 5,
    job: "Wizard",
    attack: 40,
    mana: 40,
    media: {
      src: "./assets/skills/fireball.png",
      alt: "wizard spell",
    },
  },
  {
    name: "Void",
    description: "",
    level: 6,
    job: "Wizard",
    attack: 70,
    mana: 70,
    media: {
      src: "./assets/skills/void.png",
      alt: "wizard spell",
    },
  },
];

export const knightSkills: Skill[] = [
  {
    name: "Cleave",
    description: "",
    level: 1,
    job: "Knight",
    attack: 12,
    mana: 0,
    media: {
      src: "./assets/skills/cleave.png",
      alt: "Knight attack",
    },
  },
  {
    name: "Piercing Strike",
    description: "",
    level: 2,
    job: "Knight",
    attack: 24,
    mana: 5,
    media: {
      src: "./assets/skills/PiercingStrike.png",
      alt: "Knight attack",
    },
  },
  {
    name: "Bull Rush",
    description: "",
    level: 3,
    job: "Knight",
    attack: 36,
    mana: 10,
    media: {
      src: "./assets/skills/bullRush.png",
      alt: "Knight attack",
    },
  },
  {
    name: "Valiant Surge",
    description: "",
    level: 4,
    job: "Knight",
    attack: 48,
    mana: 15,
    media: {
      src: "./assets/skills/ValiantSurge.png",
      alt: "Knight attack",
    },
  },
  {
    name: "Battle Cry",
    description: "",
    level: 5,
    job: "Knight",
    attack: 60,
    mana: 20,
    media: {
      src: "./assets/skills/BattleCry.png",
      alt: "Knight attack",
    },
  },
  {
    name: "Divine Judgement",
    description: "",
    level: 6,
    job: "Knight",
    attack: 100,
    mana: 40,
    media: {
      src: "./assets/skills/divineJudgement.png",
      alt: "Knight attack",
    },
  },
];
