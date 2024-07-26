import { Media } from "./character/characters";
import { MonsterNames } from "./Enemies/enemies";
import { NPCNames, Locations } from "./enum";

export type Location = {
  text: string;
  media: Media;
  path: Locations[];
  enemy: MonsterNames[];
  npc: NPCNames[];
};

export type LocationType = {
  [key: string]: Location;
};

export const LocationList: LocationType = {
  "Armor Shop": {
    text: "Hello there pal! What could i interest you with today?!",
    media: {
      src: "./assets/village/shop.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza],
    enemy: [],
    npc: [],
  },
  "Potion Shop": {
    text: "Hello there, welcome to my shop! any particular potions you need today?",
    media: {
      src: "./assets/village/potionShop.png",
      alt: "",
    },
    path: [Locations.Eldervale],
    enemy: [],
    npc: [],
  },
  Tavern: {
    text: "This is the tavern",
    media: {
      src: "./assets/village/tavern.png",
      alt: "",
    },
    path: [Locations.outsideTavern],
    enemy: [],
    npc: [NPCNames.Bartender],
  },
  "Ironwood Avenue": {
    text: "Ironwood Avenue",
    media: {
      src: "./assets/village/ironwoodAvenue.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza, Locations.Tavern, Locations.BackGate],
    enemy: [],
    npc: [],
  },
  "Emerald Plaza": {
    text: "Emerald Plaza",
    media: {
      src: "./assets/village/EmeraldPlaza.png",
      alt: "",
    },
    path: [Locations.outsideTavern, Locations.CityGates, Locations.ArmorShop],
    enemy: [],
    npc: [NPCNames.OldLady],
  },
  "Arcanthria City Gates": {
    text: "City Gates",
    media: {
      src: "./assets/village/cityGates.png",
      alt: "",
    },
    path: [
      Locations.EmeraldPlaza,
      Locations.Eldervale,
      Locations.WhisperingWoods,
      Locations.RiverbendHarbor,
    ],
    enemy: [],
    npc: [],
  },
  "Ironwood Gate": {
    text: "Ironwood Gate",
    media: {
      src: "./assets/village/backGate.png",
      alt: "",
    },
    path: [Locations.EvershadeForest, Locations.outsideTavern],
    enemy: [],
    npc: [],
  },
  Eldervale: {
    text: "Eldervale",
    media: {
      src: "./assets/village/eldervale.png",
      alt: "",
    },
    path: [
      Locations.CityGates,
      Locations.CircleOfTheGods,
      Locations.EaglesPeak,
      Locations.AetherPeak,
      Locations.WhisperingWoods,
      Locations.PotionShop,
    ],
    enemy: [],
    npc: [],
  },
  "Circle Of The Gods": {
    text: "Circle Of The Gods",
    media: {
      src: "./assets/world/stoneCircle.png",
      alt: "",
    },
    path: [Locations.Eldervale],
    enemy: [],
    npc: [],
  },
  "Evershade Forest": {
    text: "Evershade Forest",
    media: {
      src: "./assets/world/enchantedForest.png",
      alt: "",
    },
    path: [
      Locations.TheCrystalCaves,
      Locations.BackGate,
      Locations.ElderglowLake,
    ],
    enemy: [],
    npc: [],
  },
  "Crystal Caves": {
    text: "Crystal Caves",
    media: {
      src: "./assets/world/crystalCave.png",
      alt: "",
    },
    path: [Locations.EvershadeForest],
    enemy: [MonsterNames.FeatherLeaf],
    npc: [],
  },
  "Elderglow Lake": {
    text: "Elderglow Lake",
    media: {
      src: "./assets/world/elderglowLake.png",
      alt: "",
    },
    path: [Locations.EvershadeForest],
    enemy: [MonsterNames.Siren],
    npc: [],
  },

  "Tavern Room": {
    text: "You were found unconscious by a villager and brought to a room at the Tavern, the doctor took a look at you, but it cost you some money.",
    media: {
      src: "./assets/village/tavernRoom.png",
      alt: "Image of a tavern room with a double bed, a fireplace and a window with a nice view of some mountains.",
    },
    path: [Locations.Tavern],
    enemy: [],
    npc: [],
  },
  "Riverbend Harbor": {
    text: "Riverbend Harbor",
    media: {
      src: "./assets/village/riverbendHarborEntrance.png",
      alt: "",
    },
    path: [Locations.CityGates, Locations.harbor],
    enemy: [],
    npc: [],
  },
  Harbor: {
    text: "Harbor",
    media: {
      src: "./assets/village/riverbendHabor.png",
      alt: "",
    },
    path: [Locations.RiverbendHarbor],
    enemy: [],
    npc: [],
  },
  "Whispering Woods": {
    text: "Whispering Woods",
    media: {
      src: "./assets/world/veilOfShadows.png",
      alt: "",
    },
    path: [Locations.Eldervale, Locations.CityGates],
    enemy: [],
    npc: [],
  },
  "Aether Peak": {
    text: "Aether Peak",
    media: {
      src: "./assets/world/aetherPeak.png",
      alt: "",
    },
    path: [Locations.Eldervale, Locations.CircleOfTheGods],
    enemy: [],
    npc: [],
  },
  "Eagles Peak": {
    text: "Eagles Peak",
    media: {
      src: "./assets/world/eaglesPeak.png",
      alt: "",
    },
    path: [Locations.Eldervale, Locations.CircleOfTheGods],
    enemy: [],
    npc: [],
  },
  "Black Void": {
    text: "Bla bla.. bla BLA BLA. Black void",
    media: {
      src: "./assets/world/blackVoid.png",
      alt: "",
    },
    path: [Locations.CircleOfTheGods],
    enemy: [],
    npc: [],
  },
};
