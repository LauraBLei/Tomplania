import { QuestItemNames } from "./questItems";
import { NPCNames, QuestStages } from "../enum";
import { Quest } from "../objects/Item";

// export type QuestType = {
//   name: string;
//   description: string[];
//   reward: number;
//   questItem: QuestItemnames[];
//   status: QuestStages;
//   npc: npcnames;
//   xp: number;
// };

export const QuestList: Quest[] = [
  {
    name: "Secret Ingredient",
    description: [
      "I want to make my famous meal, but none of the stores have any! The meat are from the little Feather Leafs in the cave, but that is way to dangerous for an old lady like me. Could i bother you with fetching some for me? one should be plenty!",
      "page two",
      "page three",
    ],
    reward: 10,
    questItem: [QuestItemNames.FeatherLeafMeat],
    status: QuestStages.NotStarted,
    npc: NPCNames.OldLady,
    xp: 20,
  },
  {
    name: "Second Quest",
    description: ["This is a test"],
    reward: 20,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.OldLady,
    xp: 1,
  },
];

// export class Quest {
//   name: string;
//   description: string[];
//   reward: number;
//   questItem: QuestItemnames[];
//   status: QuestStages;
//   npc: npcnames;
//   xp: number;
//   constructor(
//     name: string,
//     description: string[],
//     reward: number,
//     questItem: QuestItemnames[],
//     status: QuestStages,
//     npc: npcnames,
//     xp: number
//   ) {
//     this.name = name;
//     this.description = description;
//     this.reward = reward;
//     this.questItem = questItem;
//     this.status = status;
//     this.npc = npc;
//     this.xp = xp;
//   }
// }

// export const QuestList: Quest[] = QuestList2.map(
//   (e) =>
//     new Quest(
//       e.name,
//       e.description,
//       e.reward,
//       e.questItem,
//       e.status,
//       e.npc,
//       e.xp
//     )
// );

// let aQuest = x.filter((e) => e.name == Questnames.SecretIngredient);
