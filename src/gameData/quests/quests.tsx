import { QuestItemNames } from "./questItems";
import { Loot, NPCNames, QuestNames, QuestStages } from "../Enums";
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
    xp: 50,
    lvl: 1,
  },
  {
    name: QuestNames.FirstTrial,
    description: [
      "Excellent! For your first trial, you will need to travel south from here.",
      "You will need to find Elderglow Lake. There is a Siren there, who has been scaring away the villagers.",
      "Kill the monster, and retrieve her head for me.",
    ],
    reward: 20,
    questItem: [Loot.SirenSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 100,
    lvl: 1,
  },
  {
    name: QuestNames.SecondTrial,
    description: ["This is a test"],
    reward: 30,
    questItem: [Loot.EagleSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 150,
    lvl: 2,
  },
  {
    name: QuestNames.ThirdTrial,
    description: ["This is a test"],
    reward: 40,
    questItem: [Loot.MirewalkerSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 200,
    lvl: 3,
  },
  {
    name: QuestNames.FourthTrial,
    description: ["This is a test"],
    reward: 50,
    questItem: [Loot.GrimLurkerPoison],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 250,
    lvl: 4,
  },
  {
    name: QuestNames.FifthTrial,
    description: ["This is a test"],
    reward: 60,
    questItem: [Loot.MarasnakeSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 300,
    lvl: 5,
  },
  {
    name: QuestNames.SixthTrial,
    description: ["This is a test"],
    reward: 80,
    questItem: [Loot.DragonSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheOldMan,
    xp: 400,
    lvl: 6,
  },
  {
    name: QuestNames.MysteriousBox,
    description: [
      "The forest does not lie, you have come at a most opportune time.",
      "I have this box. It is said to hold a mysterious artifact, which has the power to heal the land.",
      "Unfortunately, the three keys are missing. Each key lies in a place guarded by a guardian.",
      "The first key's Guardian is by a moonlit pool, it is said to be an abyssal seahorse. You will need its heart for the key",
      "The second guardian is said to be in the Singing Grove. The Guardian is a dark druid. It is said that he wears the key around his neck.",
      "The third and last key, can be found in the Whispering Cavern. Be careful, in there lies a woman with a dangerous beast. You will need her headpiece for the key.",
    ],
    reward: 60,
    questItem: [
      QuestItemNames.KeyOne,
      QuestItemNames.KeyTwo,
      QuestItemNames.keyThree,
    ],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheYoungWoman,
    xp: 300,
    lvl: 1,
  },
  {
    name: QuestNames.BårdQuestOne,
    description: [
      "Alright, listen up. There is this creature in the grove that has this fruit.",
      "Its my favorite fruit but no one dares to challenge the Fromster, so i rarely get it.",
      "And i could definitely do it myself.. like i am strong. But then, what would you do?",
      "So yeah.. could you fetch me some?, i will pay you of course.",
    ],
    reward: 15,
    questItem: [QuestItemNames.ForbiddenFruit],
    status: QuestStages.NotStarted,
    npc: NPCNames.Bård,
    xp: 75,
    lvl: 2,
  },
  {
    name: QuestNames.BårdQuestTwo,
    description: [
      "Ahh you are back i see. Well good! I have another task for you.",
      "I got robbed by a tentacle on my way home from Riverbend Harbor Beach! They took a chest, and i really need it back!",
      "Again of course i would do it myself if i had the time.. But i am veery busy.",
      "Could you fetch it from me?",
    ],
    reward: 25,
    questItem: [QuestItemNames.BårdsChest],
    status: QuestStages.NotStarted,
    npc: NPCNames.Bård,
    xp: 125,
    lvl: 4,
  },
  {
    name: QuestNames.EllaQuestOne,
    description: [
      "Hey! So i have a task for you {name} !",
      "(Ella gets distracted when she sees a fly. As it lands, she quickly stabs it with her knife and eats it.)",
      "Oh.. where was i..",
      "Right! The task! I need some Feather Leaf Fluid. You can only get if from a perfect kill of a Feather Leaf.",
      "So it might take some tries to get it! Are you up for it?",
    ],
    reward: 10,
    questItem: [Loot.FeatherLeafFluid],
    status: QuestStages.NotStarted,
    npc: NPCNames.Ella,
    xp: 50,
    lvl: 1,
  },
  {
    name: QuestNames.EllaQuestTwo,
    description: [
      "Alright! so i have heard of this huge fish that lives in the Elderglow lake.",
      "Its supposed to be the best meat you have ever tasted!",
      "If i remember correctly, its called a Hellmaw Piranha!",
    ],
    reward: 20,
    questItem: [Loot.HellmawPiranhaMeat],
    status: QuestStages.NotStarted,
    npc: NPCNames.Ella,
    xp: 100,
    lvl: 3,
  },
  {
    name: QuestNames.BartenderOne,
    description: [
      "We are crazy busy in the tavern today! and the fisherman was all sold out at the market.",
      "Could you be a lad and catch some Glowfin Minnow Meat for me? One should be plenty for the day!",
    ],
    reward: 10,
    questItem: [Loot.GlowfinMinnowMeat],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheBartender,
    xp: 50,
    lvl: 1,
  },
  {
    name: QuestNames.BartenderTwo,
    description: [
      "So the villagers have been talking and we have agreed to ask you to handle a problem for us.",
      "There are this little beast, called a Niffler, that has been pestering the villagers. Stealing all our stuff.",
      "It lives south of here, in the forest. Will you help us? We will pay you of course",
    ],
    reward: 15,
    questItem: [
      QuestItemNames.VillagersChest,
      QuestItemNames.VillagersNecklace,
    ],
    status: QuestStages.NotStarted,
    npc: NPCNames.TheBartender,
    xp: 75,
    lvl: 2,
  },
  {
    name: QuestNames.LumsQuestOne,
    description: [
      "*KWEH*, {name} ! I was hoping you could help me with something!",
      "I usually get my food from the grove, but recently a Zu has been watching over it!",
      "It would be very helpful if you could scare it away!",
      "I will pay you of course! Just bring me some proof!",
    ],
    reward: 30,
    questItem: [Loot.ZuSkull],
    status: QuestStages.NotStarted,
    npc: NPCNames.Lums,
    xp: 200,
    lvl: 5,
  },
];
