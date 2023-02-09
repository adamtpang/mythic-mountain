import Unit from "./unit.js"
import BattleHUD from "./battleHUD.js"
import Cutscene2 from "./cutscene2.js"

export default class Battle2 {
    constructor(overworld) {
        this.overworld = overworld
        this.player = new Unit("Astalor", 150, "player", [
            {"Sword Slice": [40, 100]}, 
            {"Sword Slash": [50, 80]}, 
            {"King's Strike": [90, 70]},
            {"Eat Coal": [40, 100]}
        ])
        this.enemy = new Unit("Robert", 400, "enemy", [
            {"Roar": [30, 100]},
            {"Dragon Tail": [50, 80]},
            {"Supernova Spit": [80, 60]},
            {"Eat Coal": [50, 100]}
        ])
        this.playerHUD = new BattleHUD(this.player) // player HUD
        this.enemyHUD = new BattleHUD(this.enemy) // enemy HUD
        this.dialogue = document.getElementsByClassName("dialogue")[0]
        this.dialogue.style.left = "320px"
        this.dialogue.style.fontSize = "16px"
        this.battleState = "Start" // states = "Start", "PlayerTurn", "EnemyTurn", "PlayerWin", "EnemyWin"
        this.dialogueDelay = 2000

        this.fightButton = document.getElementById("fight-button")
        this.choice1 = document.getElementById("fight1")
        this.choice2 = document.getElementById("fight2")
        this.choice3 = document.getElementById("fight3")
        this.choice4 = document.getElementById("fight4")
    }
    
    init() { // battle initiation
        console.log("Battle Initiated")
        this.playerHUD.setHUD() // sets the HUD
        this.enemyHUD.setHUD() // sets the HUD
        this.dialogue.innerText = `A wild ${this.enemy.name} appeared!` 
    }

    // player chooses
    onFightButton() { // fight button
        this.playerTurn()
    }

    onFight1() { // small attack
        console.log("small attack")
        if (this.battleState !== "PlayerTurn") return
        this.dialogue.innerText = `${this.player.name} used ${this.player.move1.name}!`
        setTimeout(() => {
            this.playerAttack(this.player.move1.damage, this.player.move1.accuracy)
        }, this.dialogueDelay)
    }

    onFight2() { // medium attack
        if (this.battleState !== "PlayerTurn") return
        this.dialogue.innerText = `${this.player.name} used ${this.player.move2.name}!`
        setTimeout(() => {
            this.playerAttack(this.player.move2.damage, this.player.move2.accuracy)
        }, this.dialogueDelay)
    }

    onFight3() { // big attack
        if (this.battleState !== "PlayerTurn") return
        this.dialogue.innerText = `${this.player.name} used ${this.player.move3.name}!`
        setTimeout(() => {
            this.playerAttack(this.player.move3.damage, this.player.move3.accuracy)
        }, this.dialogueDelay)    
    }

    onFight4() { // heal
        if (this.battleState !== "PlayerTurn") return
        this.dialogue.innerText = `${this.player.name} used ${this.player.move4.name}!`
        setTimeout(() => {
            this.playerHeal(this.player.move4.healing)
        }, this.dialogueDelay)    
    }

    // its dialogue setting, then action

    playerTurn() { // player turn
        console.log("Player Turn")
        this.battleState = "PlayerTurn"
        this.dialogue.innerText = "Choose a move!"
    }

    enemyTurn() { // enemy turn
        console.log("Enemy Turn")
        this.battleState = "EnemyTurn"
        this.dialogue.innerText = `${this.enemy.name} is thinking...`
    }

    playerAttack(damage, accuracy) { // player attacks
        console.log("Player Attack")
        if (Math.random() * 100 > accuracy) { // if the move misses
            this.battleState = "EnemyTurn"
            this.dialogue.innerText = "The attack missed!"
            setTimeout(() => {
                this.enemyTurn()
                this.enemyChoosesMove()
            }, this.dialogueDelay)
            return
        } else { // if the move hits
            let isDead = this.enemy.takeDamage(damage) // enemy takes damage
            this.enemyHUD.setHP(this.enemy.currentHP / this.enemy.maxHP) // updates enemy HP
            if (isDead) { // if enemy is dead
                this.battleState = "PlayerWin"
                this.dialogue.innerText = `${this.enemy.name} fainted!`
                setTimeout(() => {
                    this.endBattle()
                }, this.dialogueDelay)
                return
            } else { // if enemy is not dead
                this.battleState = "EnemyTurn"
                this.dialogue.innerText = `${this.enemy.name} is hurt!`
                setTimeout(() => {
                    this.enemyTurn()
                    this.enemyChoosesMove()
                }, this.dialogueDelay)
            }
        }
    }
    
    enemyAttack(damage, accuracy) { // enemy attacks
        console.log("Enemy Attack")
        if (Math.random() * 100 > accuracy) { // if the move misses
            this.battleState = "PlayerTurn"
            this.dialogue.innerText = "The attack missed!"
            setTimeout(() => {
                this.playerTurn()
            }, this.dialogueDelay)
            return
        } else { // if the move hits
            let isDead = this.player.takeDamage(damage) // player takes damage
            this.playerHUD.setHP(this.player.currentHP / this.player.maxHP) // updates player HP
            if (isDead) {
                this.battleState = "EnemyWin"
                this.dialogue.innerText = `${this.player.name} fainted!`
                setTimeout(() => {
                    this.endBattle()
                }, this.dialogueDelay)
                return
            } else {
                this.battleState = "PlayerTurn"
                this.dialogue.innerText = `${this.player.name} is hurt!`
                setTimeout(() => {
                    this.playerTurn()
                }, this.dialogueDelay)
            }
        }
    }

    enemyChoosesMove() { // enemy chooses move
        console.log("Enemy Chooses Move")
        let enemyMoves = [this.enemy.move1, this.enemy.move2, this.enemy.move3, this.enemy.move4]
        let randomMove = enemyMoves[Math.floor(Math.random() * enemyMoves.length)]
        if (randomMove === this.enemy.move4) { // if the move is heal
            this.dialogue.innerText = `${this.enemy.name} used ${randomMove.name}!`
            setTimeout(() => {
                this.enemyHeal(randomMove.healing)
            }, this.dialogueDelay)
        } else { // if the move is attack
            this.dialogue.innerText = `${this.enemy.name} used ${randomMove.name}!`
            setTimeout(() => {
                this.enemyAttack(randomMove.damage, randomMove.accuracy)
            }, this.dialogueDelay)
        }
    }

    playerHeal(healing) { // player heals
        console.log("Player Heal")
        this.player.heal(healing)
        this.playerHUD.setHP(this.player.currentHP / this.player.maxHP)
        this.battleState = "EnemyTurn"
        this.dialogue.innerText = `${this.player.name} is healed!`
        setTimeout(() => {
            this.enemyTurn()
            this.enemyChoosesMove()
        }, this.dialogueDelay)
    }

    enemyHeal(healing) { // enemy heals
        console.log("Enemy Heal")
        this.enemy.heal(healing)
        this.enemyHUD.setHP(this.enemy.currentHP / this.enemy.maxHP)
        this.battleState = "PlayerTurn"
        this.dialogue.innerText = `${this.enemy.name} is healed!`
        setTimeout(() => {
            this.playerTurn()
        }, this.dialogueDelay)
    }

    endBattle() { // ends the battle
        console.log("Battle Ended")
        if (this.battleState === "PlayerWin") {
            this.dialogue.innerText = "You won!"
            setTimeout(() => {
                this.overworld.changeScreen(Cutscene2)
            }, this.dialogueDelay + 2000)
        } else if (this.battleState === "EnemyWin") {
            this.dialogue.innerText = "You lost!"
        }
    }
}