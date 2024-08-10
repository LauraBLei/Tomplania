
import { Loot, NPCNames, QuestNames, QuestStages } from "../Enums";
import { QuestItemNames } from "../quests/questItems";

export type NPCText = {
    startText: string[];
    hasVisitedText: string[];
    QuestInProgress: string[];
    QuestAccepted: string[];
    QuestDelivered: string[];
    NoAvailableQuests: string[];
  };

export class Quest {
    name: QuestNames;
    description: string[];
    reward: number;
    questItem: (QuestItemNames|Loot)[];
    status: QuestStages;
    npc: NPCNames;
    xp: number;
    lvl: number;
  
    constructor({
      name,
      description,
      reward,
      questItem,
      status,
      npc,
      xp,
      lvl,
    }: Quest) {
      this.name = name;
      this.description = description;
      this.reward = reward;
      this.questItem = questItem;
      this.status = status;
      this.npc = npc;
      this.xp = xp;
      this.lvl = lvl
    }
  }