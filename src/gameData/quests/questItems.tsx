import { Media } from "../character/characters";
import { ItemClass } from "../objects/Item";

export type Item = {
  name: string;
  type: string;
  cost: number;
  dropChance: number;
  media: Media;
};

export type QuestItemsType = {
  [key: string]: Item;
};

export enum QuestItemNames {
  FeatherLeafMeat = "Feather Leaf Meat",
}

export const QuestItems: QuestItemsType = {
  "Feather Leaf Meat": {
    name: "Feather Leaf Meat",
    type: "QuestItem",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/monsterLoot/icon25.png",
      alt: "Feather Leaf Meat",
    },
  },
};

export const NewQuestItems: ItemClass[] = [
  {
    name: "Feather Leaf Meat",
    type: "QuestItem",
    description: "description",
    cost: 1,
    dropChance: 1,
    media: {
      src: "./assets/items/monsterLoot/icon25.png",
      alt: "Feather Leaf Meat",
    },
  },
];
