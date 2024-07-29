import { Media } from "../character/characters";
import { QuestNames } from "../Enums";
import { NPCText } from "./Quest";

export class NPC {
  type: string;
  name: string;
  text: NPCText;
  quests: QuestNames[];
  media: Media;
  hasVisited: boolean;

  constructor({ type, name, text, quests, media, hasVisited }: NPC) {
    this.type = type;
    this.name = name;
    this.text = text;
    this.quests = quests;
    this.media = media;
    this.hasVisited = hasVisited;
  }
}
