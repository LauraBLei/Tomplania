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
    npc: NPCNames.TheOldLady,
    xp: 20,
    lvl: 1,
  },
  {
    name: QuestNames.test,
    description: ["This is a test"],
    reward: 20,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheBartender,
    xp: 1,
    lvl: 1,
  },
  {
    name: QuestNames.FirstTrial,
    description: [
      "Excellent! For your first trial, you will need to travel south from here.",
      "You will need to find Elderglow Lake. There is a Siren there, who has been scaring away the villagers.",
      "Kill the monster, and retrieve her head for me.",
    ],
    reward: 100,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 100,
    lvl: 2,
  },
  {
    name: QuestNames.SecondTrial,
    description: ["This is a test"],
    reward: 120,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 150,
    lvl: 3,
  },
  {
    name: QuestNames.ThirdTrial,
    description: ["This is a test"],
    reward: 150,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 200,
    lvl: 4,
  },
  {
    name: QuestNames.FourthTrial,
    description: ["This is a test"],
    reward: 200,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 350,
    lvl: 5,
  },
  {
    name: QuestNames.FifthTrial,
    description: ["This is a test"],
    reward: 250,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 400,
    lvl: 6,
  },
  {
    name: QuestNames.SixthTrial,
    description: ["This is a test"],
    reward: 300,
    questItem: [],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 500,
    lvl: 7,
  },
];
