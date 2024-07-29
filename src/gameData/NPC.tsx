import { QuestNames } from "./Enums";
import { NPC } from "./objects/Npc";

// export type NPCtype = {
//   type: string;
//   name: string;
//   text: NPCText;
//   quests: QuestNames[];
//   media: Media;
// };

export const NPCList: NPC[] = [
  {
    type: "Old Lady",
    name: "Esther Willow",
    text: {
      startText:
        "Hello Stranger! My name is Esther Willow, I have some tasks i need to get done, could you help me?",
      hasVisitedText: "Hello Friend! Could you help me?",
      QuestInProgress: "Thank you so much for helping me out!",
      QuestAccepted: "Thank you so much! I Really appreciate it!",
      QuestDelivered: "Oh you are such a sweetheart! Thank you so much!",
    },
    quests: [QuestNames.SecretIngredient],
    media: {
      src: "./assets/npc/oldLady.png",
      alt: "An old lady standing in front of some townhouses, she has a sunhat on, and holding a basket in her hand.",
    },
    hasVisited: false,
  },
  {
    type: "Bartender",
    name: "Dorian Blackwood",
    text: {
      startText:
        "Hello there pal! My name is Dorian Blackwood. You look like someone who knows how to handle themselves! Could you be up for a task?",
      hasVisitedText:
        "Hello Again! What do you say, are you ready to help me out?",
      QuestInProgress: "",
      QuestAccepted: "",
      QuestDelivered: "",
    },
    quests: [],
    media: {
      src: "./assets/npc/bartender.png",
      alt: "Image of a male bartender with grey hair, green shirt and brown apron.",
    },
    hasVisited: false,
  },
];
