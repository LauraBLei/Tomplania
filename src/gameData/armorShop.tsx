import { Item } from "./objects/Item";

// export type ArmorType = {
//   name: string;
//   type: string;
//   hp: number;
//   attack: number;
//   cost: number;
//   media: Media;
//   description: string;
// };

export const ArmorShopInventory: Item[] = [
  {
    name: "Sentry's Mail",
    type: "Chest",
    hp: 30,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/armor2.png",
      alt: "chest piece armor",
    },
    description: "You are gonna need at least this to survive out there mate!",
  },
  {
    name: "Fire lords Mail",
    type: "Chest",
    hp: 150,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/armor1.png",
      alt: "chest piece armor",
    },
    description:
      "This is a nice piece! Makes sure you can take a few more hits!",
  },
  {
    name: "Serpent banes rope",
    type: "Chest",
    hp: 250,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/Rope2.png",
      alt: "chest piece armor",
    },
    description:
      "I got to admit, it did not make this. And it scares me a bit! I got it from a creepy stranger from out of town. He really wanted to get rid of it!",
  },
  {
    name: "Sentry's gauntlets",
    type: "Gauntlet",
    hp: 10,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/hands1.png",
      alt: "gauntlets",
    },
    description:
      "These are nice beginner gauntlets, if you cant afford anything better!",
  },
  {
    name: "Fire lords Gauntlets",
    type: "Gauntlet",
    hp: 50,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/hands2.png",
      alt: "gauntlets",
    },
    description: "Yeah these will do it for ya! Good quality! made it myself!",
  },
  {
    name: "Sentry's Boots",
    type: "Boot",
    hp: 10,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/Boots2.png",
      alt: "Boot",
    },
    description:
      "You gotta have shoes?! What are you gonna do? run around barefoot? That would be crazy!",
  },

  {
    name: "Fire lords Boots",
    type: "Boot",
    hp: 50,
    attack: 0,
    cost: 10,
    media: {
      src: "./assets/items/gear/Boots1.png",
      alt: "Boots",
    },
    description:
      "These are some good quality boots! fine as well! Made them with my own two hands!",
  },
  {
    name: "Elder glow Staff",
    type: "Weapon",
    hp: 0,
    attack: 5,
    cost: 10,
    media: {
      src: "./assets/items/weapons/staffs/staff2.png",
      alt: "Staff",
    },
    description: "",
  },
  {
    name: "Serpent banes staff",
    type: "Weapon",
    hp: 0,
    attack: 60,
    cost: 10,
    media: {
      src: "./assets/items/weapons/staffs/staff4.png",
      alt: "Staff",
    },
    description: "This Staff Scares me!",
  },
  {
    name: "Silver light Sword",
    type: "Weapon",
    hp: 0,
    attack: 10,
    cost: 10,
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
    hp: 0,
    attack: 30,
    cost: 10,
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
    hp: 0,
    attack: 60,
    cost: 10,
    media: {
      src: "./assets/items/weapons/daggers/dagger3.png",
      alt: "Dagger",
    },
    description:
      "This one.. I gotta admit, this is my pride and joy! Made from dragons fire, back when they were our allies.. Good times they were..",
  },
];
