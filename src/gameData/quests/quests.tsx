import { QuestItemNames } from "./questItems";
import { NPCNames, QuestNames, QuestStages } from "../Enums";
import { Quest } from "../objects/Quest";

export const QuestList: Quest[] = [
  {
    name: QuestNames.SecretIngredient,
    description: [
      "I want to make my famous meal, but none of the stores have any! ",
      "The meat are from the little Feather Leafs in the cave, but that is way to dangerous for an old lady like me. ",
      "Could i bother you with fetching some for me? one should be plenty!",
    ],
    reward: 10,
    questItem: [QuestItemNames.FeatherLeafMeat],
    status: QuestStages.NotStarted,
    npc: NPCNames.OldLady,
    xp: 20,
  },
  {
    name: QuestNames.test,
    description: ["This is a test"],
    reward: 20,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.Bartender,
    xp: 1,
  },
];
