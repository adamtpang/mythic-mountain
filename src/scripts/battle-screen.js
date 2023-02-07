export default class BattleScreen {
    constructor(gameContainer, canvas, context, audio) {
        this.gameContainer = gameContainer
        this.canvas = canvas
        this.context = context
        this.audio = audio

        // create battle screen art
        this.battleScreenArt = new Image()
        this.battleScreenArt.src = "../assets/battle-screen-art/twilight-pond.png";

        // change audio
        this.audio.src = "../music/xDeviruchi - And The Journey Begins .wav"
    }

    init() {
        this.battleScreenArt.onload = () => {
            this.context.drawImage(this.battleScreenArt, 0, 0, this.canvas.width, this.canvas.height)
        }
    }
}