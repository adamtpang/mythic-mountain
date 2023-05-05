import Unit from "./unit.js";

// main character
export const Astalor = new Unit("Astalor", 100, "player", [
    { "Slice": [40, 100] },
    { "Slash": [50, 80] },
    { "Fire Blast": [80, 70] },
    { "Eat Coal": [35, 100] },
]);

// slime fight 1
export const Draymond = new Unit("Draymond", 110, "enemy", [
    { Tackle: [20, 100] },
    { Bash: [40, 80] },
    { "Body Slam": [50, 70] },
    { "Drink Slime": [20, 100] },
]);

// 

// dragon fight 3
export const Robert = new Unit("Robert", 280, "enemy", [
    { "Sharp Roar": [30, 100] },
    { "Dragon Tail": [50, 80] },
    { "Supernova Spit": [70, 60] },
    { "Devour Coal": [45, 100] },
]);
