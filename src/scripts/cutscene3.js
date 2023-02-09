import StartScreen from "./start-screen"
export default class Cutscene3 {
    constructor(overworld) {
        this.overworld = overworld
        this.gameContainer = overworld.element
        this.canvas = overworld.canvas
        this.context = overworld.context
        this.audio = overworld.audio

        // find game container
        this.gameContainer = document.querySelector(".game-container")

        // find menu
        this.menu = document.querySelector(".menu")
        
        // clear menu
        this.menu.style.display = "none"

        // create cutscene art
        this.cutsceneArt = new Image()
        this.cutsceneArt.src = "assets/cutscene/mountain-water.png"

        // create cutscene textframe with html. and make it have a gray translucent background
        this.textFrame = document.createElement("div")
        this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <p>You have slain Robert, the bane of all.</p>
            <p>You've accomplished all you set out to.</p>
            <p>What is next for you? Who knows...</p>
            <p>But for now, you can rest easy.</p>
            <p>Maybe fight another dragon ¯\\_(ツ)_/¯ ?</p>
            <br>
            <br>
            <p>Click to return...</p>
        `
        this.textFrame.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
        this.textFrame.style.zIndex = "1"
        this.textFrame.style.position = "absolute"
        this.textFrame.style.top = "0"
        this.textFrame.style.left = "0"
        this.textFrame.style.width = "100%"
        this.textFrame.style.height = "100%"
        this.textFrame.style.textAlign = "center"
        this.textFrame.style.fontSize = "30px"
        this.textFrame.style.color = "white"
        this.textFrame.style.fontFamily = "sans-serif"
        this.gameContainer.appendChild(this.textFrame)

        // change audio
        this.audio.src = "music/xDeviruchi - The Final of The Fantasy.wav"
    }

    init() {
        this.cutsceneArt.onload = () => {
            this.context.drawImage(this.cutsceneArt, 0, 0, this.canvas.width, this.canvas.height)
        }
        this.textFrame.addEventListener("click", () => {
            this.gameContainer.removeChild(this.textFrame)
            this.overworld.changeScreen(StartScreen)
        })
    }
}