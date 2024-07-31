import { knightSkills, Skill, sorcererSpells, wizardSpells } from "./skills";

export type Media = {
  src: string;
  alt: string;
};

export type Gear = {
  weapon?: string;
  chest?: string;
  gauntlet?: string;
  boot?: string;
};

export class Character {
  job: string;
  media: Media;
  maxHealth: number;
  mana: number;
  skills: Skill[];

  constructor({ job, media, maxHealth, mana, skills }: Character) {
    this.job = job;
    this.media = media;
    this.maxHealth = maxHealth;
    this.mana = mana;
    this.skills = skills;
  }
}

export const listOfCharacters: Character[] = [
  {
    job: "Sorcerer",
    media: {
      src: "./assets/characters/maleSorcerer.png",
      alt: "Image of a male sorcerer",
    },
    maxHealth: 100,
    mana: 100,
    skills: sorcererSpells,
  },
  {
    job: "Sorcerer",
    media: {
      src: "./assets/characters/femaleSorcerer.png",
      alt: "Image of a female sorcerer",
    },
    maxHealth: 100,
    mana: 100,
    skills: sorcererSpells,
  },
  {
    job: "Sorcerer",
    media: {
      src: "./assets/characters/dogSorcerer.png",
      alt: "Image of a dog sorcerer",
    },
    maxHealth: 100,
    mana: 100,
    skills: sorcererSpells,
  },
  {
    job: "Wizard",
    media: {
      src: "./assets/characters/pugWizard.png",
      alt: "Image of a pug wizard",
    },
    maxHealth: 120,
    mana: 80,
    skills: wizardSpells,
  },
  {
    job: "Wizard",
    media: {
      src: "./assets/characters/catWizard.png",
      alt: "Image of a cat Wizard",
    },
    maxHealth: 120,
    mana: 80,
    skills: wizardSpells,
  },
  {
    job: "Wizard",
    media: {
      src: "./assets/characters/maleWizard.png",
      alt: "Image of a male sorcerer",
    },
    maxHealth: 120,
    mana: 80,
    skills: wizardSpells,
  },
  {
    job: "Wizard",
    media: {
      src: "./assets/characters/femaleWizard.png",
      alt: "Image of a female sorcerer",
    },
    maxHealth: 120,
    mana: 80,
    skills: wizardSpells,
  },
  {
    job: "Knight",
    media: {
      src: "./assets/characters/corgiKnight.png",
      alt: "Image of a corgi in knight's armor",
    },
    maxHealth: 150,
    mana: 50,
    skills: knightSkills,
  },
  {
    job: "Knight",
    media: {
      src: "./assets/characters/femaleKnight.png",
      alt: "Image of a female in knight's armor",
    },
    maxHealth: 150,
    mana: 50,
    skills: knightSkills,
  },
  {
    job: "Knight",
    media: {
      src: "./assets/characters/maleKnight.png",
      alt: "Image of a male in knight's armor",
    },
    maxHealth: 150,
    mana: 50,
    skills: knightSkills,
  },
  {
    job: "Knight",
    media: {
      src: "./assets/characters/catKnight.png",
      alt: "Image of a kat in knight's armor",
    },
    maxHealth: 150,
    mana: 50,
    skills: knightSkills,
  },
];

const x: Character[] = [...listOfCharacters];

console.log(x);
