import { QuestItemNames } from "./questItems";

export type QuestType = {
  Name: string;
  description: string[];
  reward: number;
  questItem: QuestItemNames[];
  status: QuestStages;
};
export enum QuestNames {
  SecretIngredient = "Secret Ingredient",
}

export enum QuestStages {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Completed = "Completed",
}

export const QuestList2: QuestType[] = [
  {
    Name: "Secret Ingredient",
    description: [
      "I want to make my famous meal, but none of the stores have any! The meat are from the little Feather Leafs in the cave, but that is way to dangerous for an old lady like me. Could i bother you with fetching some for me? one should be plenty!",
      "page two",
      "page three",
    ],
    reward: 10,
    questItem: [QuestItemNames.FeatherLeafMeat],
    status: QuestStages.NotStarted,
  },
  {
    Name: "Second Quest",
    description: ["This is a test"],
    reward: 20,
    questItem: [],
    status: QuestStages.NotStarted,
  },
];

export class Quest {
  name: string;
  description: string[];
  reward: number;
  questItem: QuestItemNames[];
  status: QuestStages;
  constructor(
    name: string,
    description: string[],
    reward: number,
    questItem: QuestItemNames[],
    status: QuestStages
  ) {
    this.name = name;
    this.description = description;
    this.reward = reward;
    this.questItem = questItem;
    this.status = status;
  }
}

export const QuestList: Quest[] = QuestList2.map(
  (e) => new Quest(e.Name, e.description, e.reward, e.questItem, e.status)
);

// let aQuest = x.filter((e) => e.name == QuestNames.SecretIngredient);
