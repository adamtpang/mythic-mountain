import BattleMaker from "./battleMaker.js";
import { Frank, Draymond, Hector, Robert } from "./cast.js";

// uses the battle maker to create the first battle, with frank vs draymond, and the specific background and music of the fight
const battle1SceneArt = "assets/background-art/twilight-pond.png";
const battle1SceneMusic = "music/xDeviruchi - And The Journey Begins .wav";
export class Battle1 extends BattleMaker {
	constructor(puppeteer) {
		super(puppeteer, battle1SceneArt, battle1SceneMusic, Frank, Draymond);
	}
}

const battle2SceneArt = "assets/background-art/night-forest.png";
const battle2SceneMusic = "music/xDeviruchi - Prepare for Battle! .wav";
export class Battle2 extends BattleMaker {
	constructor(puppeteer) {
		super(puppeteer, battle2SceneArt, battle2SceneMusic, Frank, Hector);
	}
}

const battle3SceneArt = "assets/background-art/cave art.png";
const battle3SceneMusic = "music/xDeviruchi - Decisive Battle.wav";
export class Battle3 extends BattleMaker {
	constructor(puppeteer) {
		super(puppeteer, battle3SceneArt, battle3SceneMusic, Frank, Robert);
	}
}
