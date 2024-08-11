import { Media } from "./character/characters";
import { MonsterNames } from "./Enemies/enemies";
import { Locations, NPCNames } from "./Enums";

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
      src: "./assets/village/armorShop.png",
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
  "Blacksmith Shop": {
    text: "Hey there friend, what are you looking for?",
    media: {
      src: "./assets/village/blacksmith.png",
      alt: "",
    },
    path: [Locations.harbor],
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
    npc: [NPCNames.TheBartender, NPCNames.Bård, NPCNames.Ella],
  },
  "Ironwood Avenue": {
    text: "",
    media: {
      src: "./assets/village/ironwoodAvenue.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza, Locations.Tavern, Locations.BackGate],
    enemy: [],
    npc: [],
  },
  "Emerald Plaza": {
    text: "",
    media: {
      src: "./assets/village/EmeraldPlaza.png",
      alt: "",
    },
    path: [Locations.outsideTavern, Locations.CityGates, Locations.ArmorShop],
    enemy: [],
    npc: [NPCNames.TheOldLady],
  },
  "Aranthria City Gates": {
    text: "The front gate to the city Aranthria",
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
    text: "The back gate to the city of Aranthria! And the way to Evershade Forest",
    media: {
      src: "./assets/village/backGate.png",
      alt: "",
    },
    path: [Locations.EvershadeForest, Locations.outsideTavern],
    enemy: [],
    npc: [],
  },
  Eldervale: {
    text: "The small village of Eldervale, I heard there was a potion shop around here!",
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
    text: "The Circle Of The Gods, said to have direct line to The Land Of The Gods.",
    media: {
      src: "./assets/world/stoneCircle.png",
      alt: "",
    },
    path: [Locations.Eldervale],
    enemy: [],
    npc: [NPCNames.TheOldMan],
  },
  "Evershade Forest": {
    text: "",
    media: {
      src: "./assets/world/enchantedForest.png",
      alt: "",
    },
    path: [
      Locations.TheCrystalCaves,
      Locations.BackGate,
      Locations.ElderglowLake,
      Locations.ForestPath,
    ],
    enemy: [MonsterNames.Niffler],
    npc: [],
  },
  "Crystal Caves": {
    text: "",
    media: {
      src: "./assets/world/crystalCave.png",
      alt: "",
    },
    path: [Locations.EvershadeForest, Locations.PathToCave],
    enemy: [MonsterNames.FeatherLeaf],
    npc: [],
  },
  "Elderglow Lake": {
    text: "",
    media: {
      src: "./assets/world/elderglowLake.png",
      alt: "",
    },
    path: [Locations.EvershadeForest],
    enemy: [
      MonsterNames.Siren,
      MonsterNames.GlowfinMinnow,
      MonsterNames.HellmawPiranha,
    ],
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
    text: "Riverbend Harbor! I heard there was a blacksmith somewhere around here!",
    media: {
      src: "./assets/village/riverbendHarborEntrance.png",
      alt: "",
    },
    path: [Locations.CityGates, Locations.harbor],
    enemy: [],
    npc: [],
  },
  Harbor: {
    text: "",
    media: {
      src: "./assets/village/riverbendHarbor.png",
      alt: "",
    },
    path: [
      Locations.RiverbendHarbor,
      Locations.PathToCave,
      Locations.Blacksmith,
      Locations.RiverbendBeach,
    ],
    enemy: [],
    npc: [],
  },
  "Whispering Woods": {
    text: "Hmmm.. The energy seems weird around these woods...",
    media: {
      src: "./assets/world/veilOfShadows.png",
      alt: "",
    },
    path: [
      Locations.Eldervale,
      Locations.CityGates,
      Locations.EloweensCabin,
      Locations.WhisperingCavern,
    ],
    enemy: [],
    npc: [],
  },
  "Aether Peak": {
    text: "I've heard about this place. It is said a vicious beast lives here..",
    media: {
      src: "./assets/world/aetherPeak.png",
      alt: "",
    },
    path: [Locations.Eldervale, Locations.CircleOfTheGods],
    enemy: [MonsterNames.SixthBoss],
    npc: [],
  },
  "Eagles Peak": {
    text: "This used to be a popular hiking spot.. until the beasts came.. Now no one dares to go here. I have to help them!",
    media: {
      src: "./assets/world/eaglesPeak.png",
      alt: "",
    },
    path: [Locations.Eldervale, Locations.CircleOfTheGods],
    enemy: [MonsterNames.SecondBoss],
    npc: [],
  },
  "Black Void": {
    text: "{name}, you are a warrior with the blood of gods coursing through your veins. To ascend to their divine ranks, you must prove your worth. You are destined to journey to a realm plagued by monstrous abominations. Conquer these beasts. Rescue the land from darkness. Fulfill your destiny. Find Janus, he will be your guide!",
    media: {
      src: "./assets/world/blackVoid.png",
      alt: "",
    },
    path: [Locations.CircleOfTheGods],
    enemy: [],
    npc: [],
  },
  "Eloween's Cabin": {
    text: "A mysterious but kind energy comes from this place...",
    media: {
      src: "./assets/world/ElowensCabin.png",
      alt: "",
    },
    path: [Locations.WhisperingWoods],
    enemy: [],
    npc: [NPCNames.TheYoungWoman],
  },
  "Moonlit Pool": {
    text: "I don not trust this place..",
    media: {
      src: "./assets/world/moonlitPool.png",
      alt: "In a forest, lies a moonlit pool, surrounded my green trees.",
    },
    path: [Locations.ForestPath],
    enemy: [MonsterNames.AbyssalSeahorse],
    npc: [],
  },
  "The Singing Grove": {
    text: "Singing Grove? but it is so silent here..",
    media: {
      src: "./assets/world/singingGrove.png",
      alt: "a grove.",
    },
    path: [Locations.PathToCave],
    enemy: [MonsterNames.DarkDruid, MonsterNames.FruitMonster, MonsterNames.Zu],
    npc: [],
  },
  "Whispering Cavern": {
    text: "",
    media: {
      src: "./assets/world/whisperingCavern.png",
      alt: "Image of a cave.",
    },
    path: [Locations.WhisperingWoods],
    enemy: [MonsterNames.SnakeWoman],
    npc: [],
  },
  "Harbor Path": {
    text: "",
    media: {
      src: "./assets/world/pathToCave.png",
      alt: "Forrest path.",
    },
    path: [Locations.SingingGrove, Locations.harbor, Locations.TheCrystalCaves],
    enemy: [MonsterNames.FourthBoss],
    npc: [NPCNames.Lums],
  },
  "Forest Path": {
    text: "Hmm.. i wonder what else lives in this forest...",
    media: {
      src: "./assets/world/forestPath.png",
      alt: "Forrest path.",
    },
    path: [Locations.EvershadeForest, Locations.MoonlitPool],
    enemy: [MonsterNames.ThirdBoss],
    npc: [],
  },
  "Riverbend Beach": {
    text: "The water looks so nice!",
    media: {
      src: "./assets/world/beach.png",
      alt: "Riverbend Beach.",
    },
    path: [Locations.RiverbendHarbor],
    enemy: [MonsterNames.FifthBoss, MonsterNames.Squirmoth],
    npc: [],
  },
};
