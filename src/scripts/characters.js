import Unit from "./unit.js";

// 30 is the standard
// each fight should increase by 50% from the previous fight
// base attack should be 10 percent of health
// battles should last 4-8 turns
// remember that the player will choose an upgrade after each fight

// first upgrade should be a 1/3rd increase to health or attacks
// second upgrade should be a 20hp increase or +6 to all attacks
// remember to show these upgrades in the cutscene upgrade page

// main character = Frank
const health = 30;
const firstAttack = health * 0.1;
const secondAttack = firstAttack * 2;
const thirdAttack = firstAttack * 3;
const heal = firstAttack;
export const Frank = new Unit("Frank", health, "player", [
    { "Paper Cut": [firstAttack, 100] },
    { "Classic Slash": [secondAttack, 75] },
    { "Fire Slash": [thirdAttack, 50] },
    { "Drink Potion": [heal, 100] },
]);

// slime fight
const slimeMultiplier = 0.5;
export const Draymond = new Unit("Draymond", health * slimeMultiplier, "enemy", [
    { "Tackle": [firstAttack * slimeMultiplier, 100] },
    { "Shoot Goop": [secondAttack * slimeMultiplier, 75] },
    { "Gravity Slam": [thirdAttack * slimeMultiplier, 50] },
    { "Drink Goop": [heal * slimeMultiplier, 100] },
]);

// beholder fight
const beholderMultiplier = 1.5;
export const Hector = new Unit("Hector", health * beholderMultiplier, "enemy", [
    { "Sharp Gaze": [firstAttack * beholderMultiplier, 100] },
    { "Wing Strike": [secondAttack * beholderMultiplier, 75] },
    { "Sink Fangs": [thirdAttack * beholderMultiplier, 50] },
    { "Chew Bugs": [heal * beholderMultiplier, 100] },
]);

// dragon fight
const dragonMultiplier = 3;
export const Robert = new Unit("Robert", health * dragonMultiplier, "enemy", [
    { "Wing Gusto": [firstAttack * dragonMultiplier, 100] },
    { "Jagged Tail": [secondAttack * dragonMultiplier, 50] },
    { "Supernova Spit": [thirdAttack * dragonMultiplier, 25] },
    { "Drink the Sun": [heal * dragonMultiplier, 100] },
]);
