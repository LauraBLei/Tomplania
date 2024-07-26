// import { Media } from "./character/characters";

import { ItemClass } from "./objects/Item";

// export type PotionType = {
//   name: string;
//   type: string;
//   cost: number;
//   hp: number;
//   heal: number;
//   attack: number;
//   media: Media;
//   description: string;
// };

export const PotionShopInventory: ItemClass[] = [
  {
    name: "Healing",
    type: "Potion",
    cost: 10,
    hp: 0,
    heal: 100,
    attack: 0,
    media: {
      src: "./assets/items/potions/healing.png",
      alt: "Image of a blue potion bottle",
    },
    description: "That is a standard healing potion! It will heal you 100 HP!",
  },
  {
    name: "Valor Vial",
    type: "Potion",
    cost: 30,
    hp: 10,
    heal: 100,
    attack: 10,
    media: {
      src: "./assets/items/potions/Elixir.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "Oh! This is our Valor Vial Elixir! This will heal you 100 HP, while improving you overall HP with 10 HP and also give your attack a boost (10 Attack)",
  },
  {
    name: "Wrath's Elixir",
    type: "Potion",
    cost: 50,
    hp: -50,
    heal: -20,
    attack: 50,
    media: {
      src: "./assets/items/potions/greenPotion.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "This, my friend, is the Elixir of Wrath! While it gives you a great attack boost (50 attack)! it will lower your overall healing, and poison you when you drink it!",
  },
  {
    name: "Life Essence",
    type: "Potion",
    cost: 50,
    hp: 20,
    heal: 200,
    attack: 0,
    media: {
      src: "./assets/items/potions/doubleHealing.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "Ahh, The Life Essence, perfect for the warrior who needs a great healing boost on the journey!",
  },
];
