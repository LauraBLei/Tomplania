import { Item } from "./objects/Item";

export const BlacksmithShopInventory: Item[] = [
  {
    name: "Silver light Sword",
    type: "Weapon",
    job: "Knight",
    attack: 7,
    cost: 25,
    media: {
      src: "./assets/items/weapons/daggers/dagger1.png",
      alt: "Sword",
    },
    description:
      "This is a fine sword for the beginner! be careful not to cut you self!",
  },
  {
    name: "Wraith blade",
    type: "Weapon",
    job: "Knight",
    attack: 14,
    cost: 55,
    media: {
      src: "./assets/items/weapons/daggers/dagger2.png",
      alt: "Sword",
    },
    description:
      "This one is made with the essence of wraiths! Just to give it that extra bit of fine edge!",
  },
  {
    name: "Dragons bane",
    type: "Weapon",
    job: "Knight",
    attack: 21,
    cost: 90,
    media: {
      src: "./assets/items/weapons/daggers/dagger3.png",
      alt: "Dagger",
    },
    description:
      "This one.. I gotta admit, this is my pride and joy! Made from dragons fire, back when they were our allies.. Good times they were..",
  },
  {
    name: "Runed Scepter",
    type: "Weapon",
    job: "Sorcerer",
    attack: 15,
    cost: 80,
    media: {
      src: "./assets/items/gear/Sorcerer/2.png",
      alt: "staff",
    },
    description: "A great and powerful staff for a powerful sorcerer!",
  },
  {
    name: "Staff Of Life",
    type: "Weapon",
    job: "Sorcerer",
    attack: 5,
    cost: 20,
    media: {
      src: "./assets/items/gear/Sorcerer/4.png",
      alt: "staff",
    },
    description:
      "This staff was made by me, but enchanted by the keeper of the woods. A great staff for a beginner!",
  },
  {
    name: "Wooden Staff",
    type: "Weapon",
    job: "Wizard",
    attack: 5,
    cost: 20,
    media: {
      src: "./assets/items/gear/Wizard/8.png",
      alt: "staff",
    },
    description: "A nice beginner wooden staff for a wizard!",
  },
  {
    name: "Serpent Banes Staff",
    type: "Weapon",
    job: "Wizard",
    attack: 15,
    cost: 80,
    media: {
      src: "./assets/items/gear/Wizard/6.png",
      alt: "staff",
    },
    description:
      "To be honest, i did not make this. And it scares me.. A strange man left it here, with a note that it should only be sold to a powerful soul. ",
  },
];
