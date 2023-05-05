export default class BattleHUD {
	constructor(unit) {
		this.unit = unit;
		this.initializeElements();
		this.setHUD();
	}

	initializeElements() {
		const team = this.unit.team;
		this.nameText = document.querySelector(`.${team}-name`);
		this.hpSlider = document.querySelector(`.${team}-hp`);
		this.width = parseFloat(getComputedStyle(this.hpSlider).width);
		this.MaxHPSliderWidth = this.hpSlider.style.width;
		this.CurrentHPSliderWidth = this.width * this.unit.currentPercentage;

		if (team === "player") {
			this.moves = this.unit.moves
		}
	}

	setHUD() {
		this.nameText.innerText = this.unit.name;
		this.hpSlider.style.width = `${this.CurrentHPSliderWidth}px`;

		if (this.unit.team === "player") {
			// set choice buttons to have their proper names
            this.moves.forEach((move, index) => {
                const button = document.getElementById(`fight${index + 1}`);
                button.innerHTML = `${move.name} |${move.damage}, ${move.accuracy}%|`;
            });
		}
	}

	setHP(HPPercentage) {
		const newWidth = HPPercentage <= 0 ? 0 : this.width * HPPercentage;
		this.hpSlider.style.width = `${newWidth}px`;
	}
}
