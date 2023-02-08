export default class BattleScreen {
    constructor(overworld) {
        this.overworld = overworld
        this.gameContainer = overworld.element
        this.canvas = overworld.canvas
        this.context = overworld.context
        this.audio = overworld.audio

        // create battle screen art
        this.battleScreenArt = new Image()
        this.battleScreenArt.src = "../assets/battle-screen-art/twilight-pond.png";

        // change audio
        this.audio.src = "../music/xDeviruchi - And The Journey Begins .wav"

        // create sprite canvases
        this.playerCanvas = document.createElement("canvas")
        this.playerCanvas.classList.add("player-canvas")
        this.playerCanvas.width = 700
        this.playerCanvas.height = 400
        this.playerContext = this.playerCanvas.getContext("2d")
        this.playerContext.imageSmoothingEnabled = false

        this.enemyCanvas = document.createElement("canvas")
        this.enemyCanvas.classList.add("enemy-canvas")
        this.enemyCanvas.width = 700
        this.enemyCanvas.height = 400
        this.enemyContext = this.enemyCanvas.getContext("2d")
        this.enemyContext.imageSmoothingEnabled = false

        // create fireknight
        this.fireknight1 = new Image()
        this.fireknight2 = new Image()
        this.fireknight3 = new Image()
        this.fireknight4 = new Image()
        this.fireknight5 = new Image()
        this.fireknight6 = new Image()
        this.fireknight7 = new Image()
        this.fireknight8 = new Image()
        this.fireknight1.src = "../assets/battle-screen-art/fireknight/idle_1.png"
        this.fireknight2.src = "../assets/battle-screen-art/fireknight/idle_2.png"
        this.fireknight3.src = "../assets/battle-screen-art/fireknight/idle_3.png"
        this.fireknight4.src = "../assets/battle-screen-art/fireknight/idle_4.png"
        this.fireknight5.src = "../assets/battle-screen-art/fireknight/idle_5.png"
        this.fireknight6.src = "../assets/battle-screen-art/fireknight/idle_6.png"
        this.fireknight7.src = "../assets/battle-screen-art/fireknight/idle_7.png"
        this.fireknight8.src = "../assets/battle-screen-art/fireknight/idle_8.png"
        this.playerFrame = 0

        // create slime
        this.slime = new Image()
        this.slime.src = "../assets/battle-screen-art/slime/slime_idle.png"
        this.enemyFrame = 0
    }
    
    init() {
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

    // image, 
    // sourceX, sourceY, 
    // sourceWidth, sourceHeight, 
    // destinationX, destinationY, 
    // destinationWidth, destinationHeight

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
            0, 0, 
            this.playerCanvas.width * 6, this.playerCanvas.height * 6
        )
    }

    drawEnemy() { // animating with spritesheet
        // 64 x 32
        let slimeWidth = 64
        let slimeHeight = 32
        if (this.enemyFrame < 14) {this.enemyFrame++} 
        else {this.enemyFrame = 0}
        this.enemyContext.clearRect(0, 0, this.enemyCanvas.width, this.enemyCanvas.height)
        this.enemyContext.drawImage(
            this.slime, 
            (Math.floor(this.enemyFrame / 3) * slimeWidth), 0, 
            slimeWidth, slimeHeight, 
            260, 150, 
            this.enemyCanvas.width * 0.6, this.enemyCanvas.height * 0.6
        )
    }
}