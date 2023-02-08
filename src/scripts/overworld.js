import StartScreen from "./start-screen"
import BattleScreen from "./battle-screen"

export default class Overworld {
    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.canvas.width = this.element.offsetWidth
        this.canvas.height = this.element.offsetHeight
        this.context = this.canvas.getContext('2d')
        this.context.imageSmoothingEnabled = false
        this.currentScreen = null

        // create audio
        this.audio = new Audio()
        this.audio.loop = true
        this.audio.muted = true
        this.audio.volume = 0.3
    }

    init() {
        const button = document.getElementById("mute-button")
        button.addEventListener("click", () => {
            this.audio.muted = !this.audio.muted
            if (this.audio.muted) {
                button.innerHTML="<img src='assets/overworld/mute_icon.png' alt='muted'></img>"
            } else {
                this.audio.play()
                button.innerHTML="<img src='assets/overworld/unmute_icon.png' alt='unmuted'></img>"
            }
        })
        this.currentScreen = new BattleScreen(this)
        this.currentScreen.init()
    }

    changeScreen(screen) {
        this.currentScreen = new screen(this)
        this.currentScreen.init()
    }
}