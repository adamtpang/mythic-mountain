import BattleScreen from "./battle-screen.js"

export default class StartScreen {
    constructor(overworld) {
        this.overworld = overworld
        this.gameContainer = overworld.element
        this.canvas = overworld.canvas
        this.context = overworld.context
        this.audio = overworld.audio

        // create start screen art and start button
        this.startScreenArt = new Image()
        this.startButton = new Image()
        this.startScreenArt.src = "../assets/start-screen/Start Screen.png"
        this.startButton.src = "../assets/start-screen/Start Button.png"

        // change audio
        this.audio.src = "../music/xDeviruchi - Title Theme .wav"
    }

    init() {
        this.startScreenArt.onload = () => {
            this.context.drawImage(this.startScreenArt, 0, 0, this.canvas.width, this.canvas.height)
            this.gameContainer.appendChild(this.startButton)
        }

        this.startButton.addEventListener("click", () => {
            this.gameContainer.removeChild(this.startButton)
            this.overworld.changeScreen(BattleScreen)
        })
    }
}