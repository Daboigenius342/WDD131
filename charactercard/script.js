
const character = {
  name: "Gritspire",
  class: "Forge Shell Adept",
  level: 5,
  health: 100,
  image: "images/gritspire.jpg",

  attacked() {
    if (this.health <= 0) return;
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      showMessage(`${this.name} has died!`);
      attackBtn.disabled = true;
      levelBtn.disabled = true;
    }
    render();
  },


  levelUp() {
    this.level += 1;
    render();
  }
};

const attackBtn = document.querySelector("#attackBtn");
const levelBtn = document.querySelector("#levelBtn");

function showMessage(text) {
  document.querySelector("#message").textContent = text;
}
function render() {
  document.querySelector("#charName").textContent = character.name;
  document.querySelector("#charClass").textContent = character.class;
  document.querySelector("#charLevel").textContent = character.level;
  document.querySelector("#charHealth").textContent = character.health;
  const img = document.querySelector("#charImage");
  img.src = character.image;
  img.alt = `${character.name} the ${character.class}`;
}

attackBtn.addEventListener("click", () => character.attacked());
levelBtn.addEventListener("click", () => character.levelUp());

render();
