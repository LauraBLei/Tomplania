// import { Media } from "./character/characters";

import { Item } from "./objects/Item";

export const PotionShopInventory: Item[] = [
  {
    name: "Healing",
    type: "Potion",
    cost: 50,
    hp: 0,
    heal: 50,
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
    cost: 250,
    hp: 10,
    heal: 100,
    attack: 10,
    media: {
      src: "./assets/items/potions/valorVile.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "Oh! This is our Valor Vial Elixir! This will heal you 100 HP, while improving you overall HP with 10 HP and also give your attack a boost (10 Attack)",
  },
  {
    name: "Wrath's Elixir",
    type: "Potion",
    cost: 100,
    hp: -50,
    heal: -50,
    attack: 30,
    media: {
      src: "./assets/items/potions/greenPotion.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "This, my friend, is the Elixir of Wrath! While it gives you a great attack boost (30 attack)! it will lower your overall healing, and poison you when you drink it!",
  },
  {
    name: "Life Essence",
    type: "Potion",
    cost: 150,
    hp: 5,
    heal: 150,
    attack: 0,
    media: {
      src: "./assets/items/potions/doubleHealing.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "Ahh, The Life Essence, perfect for the warrior who needs a great healing boost on the journey!",
  },
  {
    name: "Mana Potion",
    type: "Potion",
    cost: 50,
    mana: 100,
    media: {
      src: "./assets/items/potions/Elixir.png",
      alt: "Image of a purple Potion bottle",
    },
    description:
      "Ahh, The Life Essence, perfect for the warrior who needs a great healing boost on the journey!",
  },
];
