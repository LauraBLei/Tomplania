export type Media = {
  src: string;
  alt: string;
};

export type Character = {
  class: string;
  media: Media;
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
      alt: "Image of a pug in knights armor",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/womanKnight.png",
      alt: "Image of a female in knight armor",
    },
  },
  {
    class: "Knight",
    media: {
      src: "./assets/characters/maleDarkKnight.png",
      alt: "Image of a male in knight armor",
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
      alt: "Image of a kat in knight armor",
    },
  },
];
