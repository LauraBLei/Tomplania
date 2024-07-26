export type Media = {
  src: string;
  alt: string;
};

export type Character = {
  class: string;
  media: Media;
  gear?: Gear;
};

export type Gear = {
  weapon?: string;
  chest?: string;
  gauntlet?: string;
  boot?: string;
};

export const characters: Character[] = [
  {
    class: "Wizard",
    media: {
      src: "./assets/characters/chunkyWizard.png",
      alt: "Image of a cat wizard",
    },
  },
  {
    class: "Sorcerer",
    media: {
      src: "./assets/characters/femaleSorcerer.png",
      alt: "Image of a female sorcerer",
    },
  },
  {
    class: "Wizard",
    media: {
      src: "./assets/characters/oldWizard.png",
      alt: "Image of an old sorcerer",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/sirPog.png",
      alt: "Image of a pug in knight's armor",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/womanKnight.png",
      alt: "Image of a female in knight's armor",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/maleDarkKnight.png",
      alt: "Image of a male in knight's armor",
    },
  },
  {
    class: "Sorcerer",
    media: {
      src: "./assets/characters/maleSorcerer.png",
      alt: "Image of a male sorcerer",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/catKnight.png",
      alt: "Image of a kat in knight's armor",
    },
  },
];

export class Character2 {
  class: string;
  media: Media;
  gear: Gear;
  gold: number;
  maxHealth: number;
  currentHealth: number;
  level: number;

  constructor(characterClass: string, media: Media, gear?: Gear) {
    this.class = characterClass;
    this.media = media;
    this.gear = gear ?? {};
    this.gold = 10;
    this.maxHealth = 100;
    this.currentHealth = this.maxHealth;
    this.level = 1;
  }
}
