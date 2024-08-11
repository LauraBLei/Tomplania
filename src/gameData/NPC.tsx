import { NPCNames, QuestNames } from "./Enums";
import { NPC } from "./objects/Npc";

export const NPCList: NPC[] = [
  {
    type: "The Old Lady",
    name: "Esther Willow",
    text: {
      startText: [
        "Hello Stranger! My name is Esther Willow, I have some tasks i need to get done, could you help me?",
      ],
      hasVisitedText: ["Hello Friend! Could you help me?"],
      QuestInProgress: ["Thank you so much for helping me out!"],
      QuestAccepted: ["Thank you so much! I Really appreciate it!"],
      QuestDelivered: ["Oh you are such a sweetheart! Thank you so much!"],
      NoAvailableQuests: [
        "Hello Dear, I am sorry i do not have any tasks for you right now. Maybe come back later!",
      ],
    },
    quests: [QuestNames.SecretIngredient],
    media: {
      src: "./assets/npc/oldLady.png",
      alt: "An old lady standing in front of some townhouses, she has a sunhat on, and holding a basket in her hand.",
    },
    hasVisited: false,
  },
  {
    type: "The Bartender",
    name: "Dorian Blackwood",
    text: {
      startText: [
        "Hello there pal! My name is Dorian Blackwood. You look like someone who knows how to handle themselves! Could you be up for a task?",
      ],
      hasVisitedText: [
        "Hello Again! What do you say, are you ready to help me out?",
      ],
      QuestInProgress: [
        "Thank you for helping me out! Let me know when you are done ay?",
      ],
      QuestAccepted: ["Thank you! I will be waiting for your return!"],
      QuestDelivered: ["Awesome mate! This is for you!"],
      NoAvailableQuests: ["Sorry friend, i have no tasks for you right now!"],
    },
    quests: [],
    media: {
      src: "./assets/npc/bartender.png",
      alt: "Image of a male bartender with grey hair, green shirt and brown apron.",
    },
    hasVisited: false,
  },
  {
    type: "The Old Man",
    name: "Janus",
    text: {
      startText: [
        "Ahh. I see you have arrived {name}. I have waited a while for you. You can call me Janus. I am your guide in this world. Explore, and come back when you are ready for the trials.",
      ],
      hasVisitedText: ["Are you ready for your trial {name}?"],
      QuestInProgress: ["Have you killed the beast?"],
      QuestAccepted: ["Safe journey {name}"],
      QuestDelivered: [
        "Well done {name}, When you are ready for the next trial come and see me.",
      ],
      NoAvailableQuests: [
        "You are not ready for the next trial {name}. Come back when you are stronger.",
      ],
    },
    quests: [
      QuestNames.FirstTrial,
      QuestNames.SecondTrial,
      QuestNames.ThirdTrial,
      QuestNames.FourthTrial,
      QuestNames.FifthTrial,
      QuestNames.SixthTrial,
    ],
    media: {
      src: "./assets/npc/oldMan.png",
      alt: "Image of Janus, your guide in the game.",
    },
    hasVisited: false,
  },
  {
    type: NPCNames.TheYoungWoman,
    name: "Eloween",
    text: {
      startText: [
        "Welcome {name}. The Forest has whispered of your coming.",
        "I am Eloween, the keeper of the forest.",
      ],
      hasVisitedText: ["Hello again {name}, are you ready for a quest?"],
      QuestInProgress: ["Welcome back brave one! Have you brought all 3 keys?"],
      QuestAccepted: ["Thank you so very much!"],
      QuestDelivered: [
        "(Taking the box and opening it with the 3 keys): You have done well {name}. The forest spirits are grateful for your bravery. ",
        "The box hold an artifact of great power, and with these keys we shall unlock it and restore the balance of the forest again.",
        "(She opens the box, and reveals a radiant and glowing crystal infused with pure magical energy.",
        "Behold, The heart of the forest. This artifact will heal the lands, and bring prosperity to all who dwell in the forest.",
        "(She takes out a coin purse, handing it over to you with a shine in her eyes)",
        "This is for you {name}, a reward for helping me healing the lands, that was oh so lost for ages",
        "take it as a token of gratitude. And may your future endeavors be met with success!",
      ],
      NoAvailableQuests: [
        "I am afraid i do not have any journeys for you {name}!",
      ],
    },
    quests: [QuestNames.MysteriousBox],
    media: {
      src: "./assets/npc/elowen.png",
      alt: "Elowen, a woman, standing in the midst of a path in a forest.",
    },
    hasVisited: false,
  },
  {
    type: NPCNames.Bård,
    name: "Bård",
    text: {
      startText: [
        "Oink... And who are you?",
        "well {name}, I am Bård.",
        "You do seem.. useful.. i guess.",
      ],
      hasVisitedText: ["Oink.. you again."],
      QuestInProgress: ["You done yet?"],
      QuestAccepted: ["Well thank you.. i guess."],
      QuestDelivered: [
        "Oink...So you are useful after all! Here take this, for your help.",
      ],
      NoAvailableQuests: [
        "What do you want? I do not have any tasks for you! Oink off!",
      ],
    },
    quests: [QuestNames.BårdQuestOne, QuestNames.BårdQuestTwo],
    media: {
      src: "./assets/npc/BårdNPC.png",
      alt: "image of Bård, the pig.",
    },
    hasVisited: false,
  },
  {
    type: NPCNames.Ella,
    name: "Ella",
    text: {
      startText: [
        "Well hello there. My name is Ella! And you are?",
        "Well hello {name}, You look capable, i might have some work for you!",
      ],
      hasVisitedText: ["Hello again {name}!"],
      QuestInProgress: ["Oh! Hello {name} you finished with the task yet?"],
      QuestAccepted: ["Nice! thank you for the help!"],
      QuestDelivered: ["You are amazing! Take this, for the trouble!"],
      NoAvailableQuests: [
        "I am sorry {name} i do not have any tasks for you right now.",
      ],
    },
    quests: [],
    media: {
      src: "./assets/npc/ellaNPC.png",
      alt: "",
    },
    hasVisited: false,
  },
  {
    type: NPCNames.Lums,
    name: "Lums",
    text: {
      startText: [
        "*KWEH* Hello there! You startled me a bit! My name is Lums. And you are?",
        "Oh! nice to meet you {name} !",
        "You look like a strong adventurer! i might need your help sometime, if you are up to it!",
      ],
      hasVisitedText: ["*KWEH*, Hello again {name}!"],
      QuestInProgress: [
        "*KWEH*, Hey there [name} , have you finished the task?",
      ],
      QuestAccepted: [
        "*KWEH*, Well thank you very much! That is very kind of you!",
      ],
      QuestDelivered: [
        "Holy *KWEH*! You are amazing! This is for your trouble!",
      ],
      NoAvailableQuests: [
        "*KWEH*, I am sorry {name}, i do not have any tasks for you at the moment!",
      ],
    },
    quests: [],
    media: {
      src: "./assets/npc/LasseChocobo.png",
      alt: "A image of Lums The Chocobo",
    },
    hasVisited: false,
  },
  {
    type: "",
    name: "",
    text: {
      startText: [""],
      hasVisitedText: [""],
      QuestInProgress: [""],
      QuestAccepted: [""],
      QuestDelivered: [""],
      NoAvailableQuests: [""],
    },
    quests: [],
    media: {
      src: "./assets/npc/",
      alt: "",
    },
    hasVisited: false,
  },
];
