import { Item } from "../objects/Item";

export type QuestItemsType = {
  [key: string]: Item;
};

export enum QuestItemNames {
  FeatherLeafMeat = "Feather Leaf Meat",
  KeyOne = "Heart Of The Abyssal Seahorse",
  KeyTwo = "Dark Druid Necklace",
  keyThree = "Crown Of The Snake Woman",
}

export const QuestItems: QuestItemsType = {
  "Feather Leaf Meat": {
    name: "Feather Leaf Meat",
    type: "QuestItem",
    cost: 1,
    dropChance: 1,
    description: "description",
    media: {
      src: "./assets/items/monsterLoot/featherLeafMeat.png",
      alt: "Feather Leaf Meat",
    },
  },
};

export const NewQuestItems: Item[] = [
  {
    name: "Feather Leaf Meat",
    type: "QuestItem",
    description: "description",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/monsterLoot/featherLeafMeat.png",
      alt: "Feather Leaf Meat",
    },
  },
  {
    name: "Heart Of The Abyssal Seahorse",
    type: "QuestItem",
    description:
      "The Heart of the Abyssal Seahorse. Quest Item for the Eloween quest.",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/questItems/key1.png",
      alt: "Heart of the abyssal seahorse",
    },
  },
  {
    name: "Dark Druid Necklace",
    type: "QuestItem",
    description:
      "Necklace of the Dark Druid. Quest Item for the Eloween quest.",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/questItems/key2.png",
      alt: "Necklace of the dark druid",
    },
  },
  {
    name: "Crown Of The Snake Woman",
    type: "QuestItem",
    description:
      "Crown from the snake woman in the Whispering Cavern. Quest Item for the Eloween quest.",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/questItems/key3.png",
      alt: "Crown of the Snake Woman",
    },
  },
];
