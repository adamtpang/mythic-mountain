import BattleScreen1 from "./battleScreen1"
import BattleScreen2 from "./battleScreen2"
export default class Cutscene1 {
    constructor(overworld) {
        this.overworld = overworld
        this.gameContainer = overworld.element
        this.canvas = overworld.canvas
        this.context = overworld.context
        this.audio = overworld.audio

        // create cutscene art
        this.cutsceneArt = new Image()
        this.cutsceneArt.src = "assets/cutscene/above-mountains.png"

        // create cutscene textframe with html. and make it have a gray translucent background
        this.textFrame = document.createElement("div")
        this.textFrame.innerHTML = `
            <br>
            <br>
            <br>
            <p>Your name is Astalor.</p>
            <p>You find yourself on a quest to North Mountain.</p>
            <p>In the distance, you see a cave embedded on the mountain's side.</p>
            <p>It's the cave of the dragon Robert! He's been terrorizing the land for years.</p>
            <p>It is time to put an end to his reign of terror.</p>
            <p>But first, you must defeat the dragon's toughest minion.</p>
            <br>
            <br>
            <p>Click to continue...</p>
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
            this.overworld.changeScreen(BattleScreen1)
        })
    }
}