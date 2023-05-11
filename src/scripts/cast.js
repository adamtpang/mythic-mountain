import Character from "./character.js";

// base stats
const health = 30;
const firstAttack = health * 0.2;
const secondAttack = firstAttack * 2;
const thirdAttack = firstAttack * 3;
const heal = secondAttack;

// URLs
const fireknightURL = "assets/character-art/fireknight/fireknight_idle.png";
const slimeURL = "assets/character-art/slime/slime_idle.png";
const beholderURL = "assets/character-art/beholder/beholder_idle.png";
const dragonURL = "assets/character-art/dragon/dragon_idle.png";

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

// setting enemey stat multipliers
const slimeMultiplier = 0.25;
const beholderMultiplier = 1;
const dragonMultiplier = 1.5;

// names
const frankName = "Frank";
const draymondName = "Draymond";
const hectorName = "Hector";
const robertName = "Robert";

// health
const frankHealth = health;
const draymondHealth = health * slimeMultiplier;
const hectorHealth = health * beholderMultiplier;
const robertHealth = health * dragonMultiplier;

// teams
const frankTeam = "player";
const draymondTeam = "enemy";
const hectorTeam = "enemy";
const robertTeam = "enemy";

// moves
const frankMoves = [
	{ "Paper Cut": [firstAttack, 100] },
	{ "Classic Slash": [secondAttack, 75] },
	{ "Fire Slash": [thirdAttack, 50] },
	{ "Drink Potion": [heal, 100] },
];
const draymondMoves = [
	{ Tackle: [firstAttack * slimeMultiplier, 100] },
	{ "Shoot Goop": [secondAttack * slimeMultiplier, 75] },
	{ "Gravity Slam": [thirdAttack * slimeMultiplier, 50] },
	{ "Drink Goop": [heal * slimeMultiplier, 100] },
];
const hectorMoves = [
	{ "Sharp Gaze": [firstAttack * beholderMultiplier, 100] },
	{ "Wing Strike": [secondAttack * beholderMultiplier, 75] },
	{ "Sink Fangs": [thirdAttack * beholderMultiplier, 50] },
	{ "Chew Bugs": [heal * beholderMultiplier, 100] },
];
const robertMoves = [
	{ "Wing Gusto": [firstAttack * dragonMultiplier, 100] },
	{ "Jagged Tail": [secondAttack * dragonMultiplier, 50] },
	{ "Supernova Spit": [thirdAttack * dragonMultiplier, 25] },
	{ "Drink the Sun": [heal * dragonMultiplier, 100] },
];

// canvas variables
const frankCanvasVariables = {
	spriteSheet: fireKnightSpriteSheet,
	srcX: 30,
	srcY: 62,
	srcWidth: 1000,
	srcHeight: 1000,
	destX: 100,
	destY: 250,
	width: 50,
	frameCount: 8,
	slowDown: 3,
	scaling: 10,
};

const draymondCanvasVariables = {
	spriteSheet: slimeSpriteSheet,
	srcX: 0,
	srcY: 0,
	srcWidth: 1000,
	srcHeight: 1000,
	destX: 200,
	destY: 470,
	width: 64,
	frameCount: 5,
	slowDown: 3,
	scaling: 12,
};

const hectorCanvasVariables = {
	spriteSheet: beholderSpriteSheet,
	srcX: 0,
	srcY: 0,
	srcWidth: 1000,
	srcHeight: 1000,
	destX: 200,
	destY: 470,
	width: 64,
	frameCount: 5,
	slowDown: 3,
	scaling: 12,
};

const robertCanvasVariables = {
	spriteSheet: dragonSpriteSheet,
	srcX: 0,
	srcY: 0,
	srcWidth: 1000,
	srcHeight: 1000,
	destX: 200,
	destY: 470,
	width: 64,
	frameCount: 5,
	slowDown: 3,
	scaling: 12,
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
