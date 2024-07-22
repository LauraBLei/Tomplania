import { Media } from "./characters";
import { QuestNames } from "./quests";

export type NPCText = {
  startText: string;
  hasVisitedText: string;
  QuestInProgress: string;
  QuestAccepted: string;
  QuestDelivered: string;
};

export type NPCtype = {
  type: string;
  name: string;
  text: NPCText;
  quests: QuestNames[];
  media: Media;
};

export enum NPCNames {
  OldLady = "Old Lady",
  Bartender = "Bartender",
}

export const NPCList2: NPCtype[] = [
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
  },
  {
    type: "Bartender",
    name: "Dorian Blackwood",
    text: {
      startText: "",
      hasVisitedText: "",
      QuestInProgress: "",
      QuestAccepted: "",
      QuestDelivered: "",
    },
    quests: [],
    media: {
      src: "./assets/npc/bartender.png",
      alt: "Image of a male bartender with grey hair, green shirt and brown apron.",
    },
  },
];

export class NPC {
  type: string;
  name: string;
  text: NPCText;
  quests: QuestNames[];
  media: Media;
  hasVisited: boolean;
  constructor(
    type: string,
    name: string,
    text: NPCText,
    quests: QuestNames[],
    media: Media
  ) {
    this.type = type;
    this.name = name;
    this.text = text;
    this.quests = quests;
    this.media = media;
    this.hasVisited = false;
  }
}

export const NPCList: NPC[] = NPCList2.map(
  (e) => new NPC(e.type, e.name, e.text, e.quests, e.media)
);
