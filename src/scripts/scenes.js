import SceneMaker from "./sceneMaker";

// every scene needs: Art, Music, Text Content
const startScreenSceneArt = "assets/background-art/Start Screen.png";
const startScreenSceneMusic = "music/xDeviruchi - Title Theme .wav";
const startScreenTextContent = "";
const startScreenMode = "start";
const startScreenUpgrade = false;

export class StartScreen extends SceneMaker {
	constructor(puppeteer) {
		super(
			puppeteer,
			startScreenSceneArt,
			startScreenSceneMusic,
			startScreenTextContent,
			startScreenMode,
			startScreenUpgrade
		);
	}
}

const cutscene1sceneArt = "assets/background-art/mountain village 2d.png";
const cutscene1sceneMusic = "music/xDeviruchi - Take some rest and eat some food!.wav";
// write a story about Frank the fireknight, and his quest to defeat the dragon Robert
const cutscene1textContent = [
	"Frank is a humble knight from a small village,",
	"driven by a mission to save his home from the fearsome dragon, Robert.",
	"Braving the journey, he embarks on a perilous quest.",
	"His first challenge lies at the foot of the mountain,",
	"in a serene pond, where the cunning slime creature, Draymond, lurks.",
	"he takes in a deep breath, and prepares for battle."
];
const cutscene1mode = "scene";
const cutscene1upgrade = false;

export class Cutscene1 extends SceneMaker {
	constructor(puppeteer) {
		super(
			puppeteer,
			cutscene1sceneArt,
			cutscene1sceneMusic,
			cutscene1textContent,
			cutscene1mode,
			cutscene1upgrade
		);
	}
}

const cutscene2sceneArt = "assets/background-art/night forest 2.png";
const cutscene2sceneMusic = "music/xDeviruchi - The Icy Cave .wav";
const cutscene2textContent = [
	"The sun sets, casting long, ominous shadows over the haunted forest.",
	"Frank stands victorious, but the night brings a new challenge.",
	"Hector, the ever watchful EYE, emerges from the shadows.",
	"Frank must choose between honing his attack skills or fortifying his vitality."
];
const cutscene2mode = "scene";
const cutscene2upgrade = true;

export class Cutscene2 extends SceneMaker {
	constructor(puppeteer) {
		super(
			puppeteer,
			cutscene2sceneArt,
			cutscene2sceneMusic,
			cutscene2textContent,
			cutscene2mode,
			cutscene2upgrade
		);
	}
}

const cutscene3sceneArt = "assets/background-art/cave entrance.png";
const cutscene3sceneMusic = "music/xDeviruchi - Mysterious Dungeon.wav";
const cutscene3textContent = [
	"Hector's defeat was a hard-earned victory.",
	"Frank continues his journey, climbing the treacherous mountain.",
	"Doubts fill his mind, but he musters the courage to enter Robert's lair.",
	"Deep in the cave, he finds Robert.",
	"It's time for the final showdown!"
];
const cutscene3mode = "scene";
const cutscene3upgrade = true;

export class Cutscene3 extends SceneMaker {
	constructor(puppeteer) {
		super(
			puppeteer,
			cutscene3sceneArt,
			cutscene3sceneMusic,
			cutscene3textContent,
			cutscene3mode,
			cutscene3upgrade
		);
	}
}

const cutscene4sceneArt = "assets/background-art/the end.png";
const cutscene4sceneMusic = "music/xDeviruchi - The Final of The Fantasy.wav";
const cutscene4textContent = [
	"Frank stands triumphant over the defeated dragon.",
	"He's not just a humble knight anymore; he's a hero.",
	"As he returns to his village, he reflects on his journey.",
	"He's faced his fears, proven his mettle, and saved his home.",
	"His journey has not been in vain.",
	"Frank has become a true knight.",
	"THE END",
];
const cutscene4mode = "scene";
const cutscene4upgrade = false;

export class Cutscene4 extends SceneMaker {
	constructor(puppeteer) {
		super(
			puppeteer,
			cutscene4sceneArt,
			cutscene4sceneMusic,
			cutscene4textContent,
			cutscene4mode,
			cutscene4upgrade
		);
	}
}
