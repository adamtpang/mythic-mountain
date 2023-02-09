import BattleScreen1 from "./battleScreen1"
import BattleScreen2 from "./battleScreen2"
export default class Cutscene15 {
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
        this.cutsceneArt.src = "assets/cave-art/blue-cave.png"  

        // create cutscene textframe with html. and make it have a gray translucent background
        this.textFrame = document.createElement("div")
        this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>You make your way up the mountain, and enter the cave.</p>
            <p>It's dark and cold in here.</p>
            <p>With sword in hand, you are ready.</p>
            <p>You face the beast, undaunted.</p>
            <br>
            <br>
            <br>
            <p>Click to fight...</p>
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
        console.log(this.textFrame.innerHTML)

        // change audio
        this.audio.src = "music/xDeviruchi - Mysterious Dungeon.wav"
    }

    init() {
        this.cutsceneArt.onload = () => {
            this.context.drawImage(this.cutsceneArt, 0, 0, this.canvas.width, this.canvas.height)
        }
        this.textFrame.addEventListener("click", () => {
            this.gameContainer.removeChild(this.textFrame)
            this.overworld.changeScreen(BattleScreen2)
        })
    }
}