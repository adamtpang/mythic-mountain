// raw data for cast of characters in the game

import Character from "./character.js";

const isTestingMode = false; // or false, depending on whether you want testing mode enabled or not
const isHellMode = false; // or false, depending on whether you want hell mode enabled or not

// URLs
const fireknightURL = "assets/character-art/fireknight_idle.png";
const slimeURL = "assets/character-art/slime_idle.png";
const beholderURL = "assets/character-art/beholder_idle.png";
const dragonURL = "assets/character-art/dragon_idle.png";

// making the image instances
const fireKnightSpriteSheet = new Image();
const slimeSpriteSheet = new Image();
const beholderSpriteSheet = new Image();
const dragonSpriteSheet = new Image();

// setting image sources
fireKnightSpriteSheet.src = fireknightURL;
slimeSpriteSheet.src = slimeURL;
beholderSpriteSheet.src = beholderURL;
dragonSpriteSheet.src = dragonURL;

// enable cheats:
// setting enemey stat multipliers .75, 1, 2.5
let slimeMultiplier = 0.75;
let beholderMultiplier = 1;
let dragonMultiplier = 2.5;

if (isTestingMode) {
	slimeMultiplier = 0.01;
	beholderMultiplier = 0.01;
	dragonMultiplier = 0.01;
}

if (isHellMode) {
	slimeMultiplier = 50;
	beholderMultiplier = 50;
	dragonMultiplier = 50;
}

// names
const frankName = "Frank";
const draymondName = "Draymond";
const hectorName = "Hector";
const robertName = "Robert";

// base stats
const health = isTestingMode ? 1000 : 40; // if in testing mode, set health to a high value
const firstAttack = Math.ceil(health * 0.1);
const secondAttack = Math.ceil(firstAttack * 1.5);
const thirdAttack = Math.ceil(firstAttack * 2);
const heal = Math.ceil(secondAttack);

// health
const frankHealth = health;
const draymondHealth = Math.ceil(health * slimeMultiplier);
const hectorHealth = Math.ceil(health * beholderMultiplier);
const robertHealth = Math.ceil(health * dragonMultiplier);

// teams
const frankTeam = "player";
const draymondTeam = "enemy";
const hectorTeam = "enemy";
const robertTeam = "enemy";

// moves
const frankMoves = [
	{ "Paper Cut": [isTestingMode ? 1000 : firstAttack, 100] },
	{ "Classic Slash": [isTestingMode ? 1500 : secondAttack, 80] },
	{ "Fire Slash": [isTestingMode ? 2000 : thirdAttack, 60] },
	{ "Drink Potion": [isTestingMode ? 1500 : heal, 100] },
];
const draymondMoves = [
	{ Tackle: [firstAttack * slimeMultiplier, 100] },
	{ "Shoot Goop": [secondAttack * slimeMultiplier, 80] },
	{ "Gravity Slam": [thirdAttack * slimeMultiplier, 60] },
	{ "Drink Goop": [heal * slimeMultiplier, 100] },
];
const hectorMoves = [
	{ "Sharp Gaze": [firstAttack * beholderMultiplier, 100] },
	{ "Wing Strike": [secondAttack * beholderMultiplier, 80] },
	{ "Sink Fangs": [thirdAttack * beholderMultiplier, 60] },
	{ "Chew Bugs": [heal * beholderMultiplier, 100] },
];
const robertMoves = [
	{ "Wing Gusto": [firstAttack * dragonMultiplier, 100] },
	{ "Jagged Tail": [secondAttack * dragonMultiplier, 80] },
	{ "Supernova Spit": [thirdAttack * dragonMultiplier, 60] },
	{ "Drink the Sun": [heal * dragonMultiplier, 100] },
];

// canvas variables
const frankCanvasVariables = {
	spriteSheet: fireKnightSpriteSheet,
	// where to start
	srcX: 0,
	srcY: 0,

	// where to draw
	destX: 50,
	destY: 350,

	// how big is each slice?
	width: 64,
	height: 64,

	// how manyy slices there are:
	frameCount: 8,

	// how to scale the image
	scaling: 7,
};

const draymondCanvasVariables = {
	spriteSheet: slimeSpriteSheet,
	// where to start
	srcX: 0,
	srcY: 0,

	// where to draw
	destX: 200,
	destY: 200,

	// how big is each slice?
	width: 64,
	height: 64,

	// how manyy slices there are:
	frameCount: 5,

	// how to scale the image
	scaling: 9,
};

const hectorCanvasVariables = {
	spriteSheet: beholderSpriteSheet,
	// where to start
	srcX: 0,
	srcY: 0,

	// where to draw
	destX: -90,
	destY: 200,

	// how big is each slice?
	width: 64,
	height: 64,

	// how manyy slices there are:
	frameCount: 5,

	// how to scale the image
	scaling: 9,
};

const robertCanvasVariables = {
	spriteSheet: dragonSpriteSheet,
	// where to start
	srcX: 0,
	srcY: 0,

	// where to draw
	destX: -10,
	destY: 200,

	// how big is each slice?
	width: 64,
	height: 64,

	// how manyy slices there are:
	frameCount: 5,

	// how to scale the image
	scaling: 9,
};

// exporting the characters

export const Frank = new Character(
	frankName,
	frankHealth,
	frankTeam,
	frankMoves,
	frankCanvasVariables
);

export const Draymond = new Character(
	draymondName,
	draymondHealth,
	draymondTeam,
	draymondMoves,
	draymondCanvasVariables
);

export const Hector = new Character(
	hectorName,
	hectorHealth,
	hectorTeam,
	hectorMoves,
	hectorCanvasVariables
);

export const Robert = new Character(
	robertName,
	robertHealth,
	robertTeam,
	robertMoves,
	robertCanvasVariables
);
