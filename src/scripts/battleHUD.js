export default class BattleHUD {
    constructor(unit) {
        this.unit = unit
        if (this.unit.team === "player") {
            this.nameText = document.getElementsByClassName("player-name")[0]
            this.hpSlider = document.getElementsByClassName("player-hp")[0]
        } else if (this.unit.team === "enemy") {
            this.nameText = document.getElementsByClassName("enemy-name")[0]
            this.hpSlider = document.getElementsByClassName("enemy-hp")[0]
        }
        this.MaxHPSliderWidth = this.hpSlider.style.width
        this.width = this.hpSlider.style.width.split("px")[0]
        this.CurrentHPSliderWidth = this.width * this.unit.currentPercentage

    }

    setHUD() {
        console.log(`this.width: ${this.width}`)
        console.log(`this.currenthpslider: ${this.CurrentHPSliderWidth}`)
        this.nameText.innerText = this.unit.name // setting HUD name
        this.hpSlider.style.width = this.CurrentHPSliderWidth + "px" // setting HUD hp
    }

    setHP(hp) {
        this.hpSlider.value = hp
    }
}