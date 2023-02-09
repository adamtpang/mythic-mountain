import Battle from "./battle.js"
import Unit from "./unit.js"

export default class BattleScreen1 {
    constructor(overworld) {
        this.gameContainer = overworld.element
        this.canvas = overworld.canvas
        this.context = overworld.context
        this.audio = overworld.audio

        // create battle screen art
        this.battleScreenArt = new Image()
        this.battleScreenArt.src = "assets/battle-screen-art/twilight-pond.png";

        // change audio
        this.audio.src = "music/xDeviruchi - And The Journey Begins .wav"

        // create sprite canvases
        this.playerCanvas = document.createElement("canvas")
        this.playerCanvas.classList.add("player-canvas")
        this.playerCanvas.width = this.gameContainer.offsetWidth / 2
        this.playerCanvas.height = this.gameContainer.offsetHeight
        this.playerContext = this.playerCanvas.getContext("2d")
        this.playerContext.imageSmoothingEnabled = false
        
        this.enemyCanvas = document.createElement("canvas")
        this.enemyCanvas.classList.add("enemy-canvas")
        this.enemyCanvas.width = this.gameContainer.offsetWidth / 2
        this.enemyCanvas.height = this.gameContainer.offsetHeight
        this.enemyContext = this.enemyCanvas.getContext("2d")
        this.enemyContext.imageSmoothingEnabled = false

        // add canvases to game container
        this.gameContainer.appendChild(this.playerCanvas)
        this.gameContainer.appendChild(this.enemyCanvas)

        // create fireknight
        this.fireknight1 = new Image()
        this.fireknight2 = new Image()
        this.fireknight3 = new Image()
        this.fireknight4 = new Image()
        this.fireknight5 = new Image()
        this.fireknight6 = new Image()
        this.fireknight7 = new Image()
        this.fireknight8 = new Image()
        this.fireknight1.src = "assets/battle-screen-art/fireknight/idle_1.png"
        this.fireknight2.src = "assets/battle-screen-art/fireknight/idle_2.png"
        this.fireknight3.src = "assets/battle-screen-art/fireknight/idle_3.png"
        this.fireknight4.src = "assets/battle-screen-art/fireknight/idle_4.png"
        this.fireknight5.src = "assets/battle-screen-art/fireknight/idle_5.png"
        this.fireknight6.src = "assets/battle-screen-art/fireknight/idle_6.png"
        this.fireknight7.src = "assets/battle-screen-art/fireknight/idle_7.png"
        this.fireknight8.src = "assets/battle-screen-art/fireknight/idle_8.png"
        this.playerFrame = 0

        // create slime
        this.slime = new Image()
        this.slime.src = "assets/battle-screen-art/slime/slime_idle.png"
        this.enemyFrame = 0

        // find menu
        this.menu = document.querySelector(".menu")

        // find mini menu
        this.miniMenu = document.querySelector(".mini-menu")

        // find buttons
        this.fightButton = document.querySelector("#fight-button")

        // find fight choice buttons
        this.fight1 = document.querySelector("#fight1")
        this.fight2 = document.querySelector("#fight2")
        this.fight3 = document.querySelector("#fight3")
        this.fight4 = document.querySelector("#fight4") 

        // create HUD text
        // player name
        this.playerName = document.createElement("p")
        this.playerName.classList.add("player-name")
        this.playerName.innerText = "playername"
        this.playerName.style.color = "black"
        this.playerName.style.fontSize = "30px"
        this.playerName.style.fontFamily = "sans-serif"
        this.playerName.style.fontWeight = "bold"
        this.playerName.style.position = "absolute"
        this.playerName.style.top = "10px"
        this.playerName.style.left = "10px"
        this.playerName.style.zIndex = "1"
        this.menu.appendChild(this.playerName)

        // enemy name
        this.enemyName = document.createElement("p")
        this.enemyName.classList.add("enemy-name")
        this.enemyName.innerText = "enemyname"
        this.enemyName.style.color = "black"
        this.enemyName.style.fontSize = "30px"
        this.enemyName.style.fontFamily = "sans-serif"
        this.enemyName.style.fontWeight = "bold"
        this.enemyName.style.position = "absolute"
        this.enemyName.style.top = "10px"
        this.enemyName.style.right = "10px"
        this.enemyName.style.zIndex = "1"
        this.menu.appendChild(this.enemyName)

        // create HUD dialogue text
        this.dialogue = document.createElement("p")
        this.dialogue.classList.add("dialogue")
        this.dialogue.innerText = "Insert Dialogue..."
        this.dialogue.style.color = "white"
        this.dialogue.style.fontSize = "20px"
        this.dialogue.style.fontFamily = "sans-serif"
        this.dialogue.style.fontWeight = "bold"
        this.dialogue.style.position = "absolute"
        this.dialogue.style.top = "30px"
        this.dialogue.style.left = "300px"
        this.dialogue.style.zIndex = "1"
        this.menu.appendChild(this.dialogue)

        // create health bar borders
        // player health bar border
        this.playerHealthBarBorder = document.createElement("div")
        this.playerHealthBarBorder.classList.add("player-hp-border")
        this.playerHealthBarBorder.style.backgroundColor = "black"
        this.playerHealthBarBorder.style.width = "260px"
        this.playerHealthBarBorder.style.height = "20px"
        this.playerHealthBarBorder.style.position = "absolute"
        this.playerHealthBarBorder.style.top = "10px"
        this.playerHealthBarBorder.style.left = "10px"
        this.playerHealthBarBorder.style.zIndex = "1"
        this.playerHealthBarBorder.style.border = "4px solid black"
        this.menu.appendChild(this.playerHealthBarBorder)

        // enemy health bar border
        this.enemyHealthBarBorder = document.createElement("div")
        this.enemyHealthBarBorder.classList.add("enemy-hp-border")
        this.enemyHealthBarBorder.style.backgroundColor = "black"
        this.enemyHealthBarBorder.style.width = "260px"
        this.enemyHealthBarBorder.style.height = "20px"
        this.enemyHealthBarBorder.style.position = "absolute"
        this.enemyHealthBarBorder.style.top = "10px"
        this.enemyHealthBarBorder.style.right = "10px"
        this.enemyHealthBarBorder.style.zIndex = "1"
        this.enemyHealthBarBorder.style.border = "4px solid black"
        this.menu.appendChild(this.enemyHealthBarBorder)

        // create health bars
        // player health bar
        this.playerHealthBar = document.createElement("div")
        this.playerHealthBar.classList.add("player-hp")
        this.playerHealthBar.style.backgroundColor = "darkred"
        this.playerHealthBar.style.width = "260px"
        this.playerHealthBar.style.height = "20px"
        this.playerHealthBar.style.position = "absolute"
        this.playerHealthBar.style.top = "10px"
        this.playerHealthBar.style.left = "10px"
        this.playerHealthBar.style.zIndex = "1"
        // make a black border around the health bar
        this.playerHealthBar.style.border = "4px solid black"
        this.menu.appendChild(this.playerHealthBar)

        // enemy health bar
        this.enemyHealthBar = document.createElement("div")
        this.enemyHealthBar.classList.add("enemy-hp")
        this.enemyHealthBar.style.backgroundColor = "darkred"
        this.enemyHealthBar.style.width = "260px"
        this.enemyHealthBar.style.height = "20px"
        this.enemyHealthBar.style.position = "absolute"
        this.enemyHealthBar.style.top = "10px"
        this.enemyHealthBar.style.right = "10px"
        this.enemyHealthBar.style.zIndex = "1"
        // make a black border around the health bar
        this.enemyHealthBar.style.border = "4px solid black"
        this.menu.appendChild(this.enemyHealthBar)

        // start a new battle
        let player = new Unit("Astalor", 100, "player", [
            {"Sword Slice": [30, 100]}, 
            {"Sword Slash": [40, 80]}, 
            {"Fire Blast": [70, 70]},
            {"Eat Coal": [30, 100]}
        ])

        let enemy = new Unit("Draymond", 120, "enemy", [
            {"Tackle": [20, 100]},
            {"Bash": [40, 80]},
            {"Body Slam": [50, 60]},
            {"Drink Slime": [30, 100]}
        ])

        this.battle = new Battle(overworld, this.playerCanvas, this.enemyCanvas, player, enemy)
        this.battle.init()
    }

    init() {
        this.menu.style.display = "flex"
        this.fightButton.addEventListener("click", () => {
            this.battle.onFightButton()
            this.fightButton.style.display = "none"
            this.miniMenu.style.flexWrap = "wrap"
            this.fight1.style.display = "block"
            this.fight2.style.display = "block"
            this.fight3.style.display = "block"
            this.fight4.style.display = "block"
            this.fight1.addEventListener("click", () => {this.battle.onFight1()})
            this.fight2.addEventListener("click", () => {this.battle.onFight2()})
            this.fight3.addEventListener("click", () => {this.battle.onFight3()})
            this.fight4.addEventListener("click", () => {this.battle.onFight4()})
        })
        this.menu.style.display = "flex"
        this.battleScreenArt.onload = () => {
            this.audio.play()
            this.context.drawImage(this.battleScreenArt, 0, 0, this.canvas.width, this.canvas.height)
            this.animateCombatants()
        }
    }

    animateCombatants() {
        setInterval(() => {
            this.drawPlayer()
            this.drawEnemy()
            this.gameContainer.appendChild(this.playerCanvas)
            this.gameContainer.appendChild(this.enemyCanvas)
            this.playerFrame++
            this.enemyFrame++
        }, 100)
    }

    drawPlayer() { // animating with frames
        // 228 x 128
        const frames = [this.fireknight1, this.fireknight2, this.fireknight3, this.fireknight4, this.fireknight5, this.fireknight6, this.fireknight7, this.fireknight8]
        let currentPlayerFrame = this.playerFrame % frames.length
        const currentFireknight = frames[currentPlayerFrame]
        this.playerContext.clearRect(0, 0, this.playerCanvas.width, this.playerCanvas.height)
        this.playerContext.drawImage(
            currentFireknight, 
            80, 62, 
            this.playerCanvas.width, this.playerCanvas.height, 
            -50, 400, 
            this.playerCanvas.width * 6, this.playerCanvas.height * 6
        )
    }

    drawEnemy() { // animating with spritesheet
        // 64 x 32
        let slimeWidth = 64
        let slimeHeight = 32
        let slimeFrames = 5
        let slowDown = 3
        let scaling = 12
        
        if (this.enemyFrame < slimeFrames * slowDown) {this.enemyFrame++}
        else {this.enemyFrame = 0}
        this.enemyContext.clearRect(0, 0, this.enemyCanvas.width, this.enemyCanvas.height)
        this.enemyContext.drawImage(
            this.slime, 
            (Math.floor(this.enemyFrame / slowDown) * slimeWidth), 0, // this slices the spritesheet into frames
            // slimeWidth * scaling, slimeHeight * scaling, 
            1000, 1000,
            200, 470, 
            this.enemyCanvas.width * scaling, this.enemyCanvas.height * scaling
            )
    }
}

    // image, 
    // sourceX, sourceY, 
    // sourceWidth, sourceHeight, 
    // destinationX, destinationY, 
    // destinationWidth, destinationHeight