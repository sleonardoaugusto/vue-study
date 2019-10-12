new Vue({
  el: '#app',
  data: {
    game: {
      started: false
    },
    hero: {
      name: 'Jiraya',
      life: 100,
      maxAttack: 10,
      minAttack: 7
    },
    monster: {
      name: 'Demogorgon',
      life: 100,
      maxAttack: 13,
      minAttack: 9
    }
  },
  methods: {
    getBgColor(life) {
      return life > 20 ? 'green' : 'red'
    },
    startGame() {
      this.game.started = true
    },
    heroAttack() {
      this.attack('hero', 'monster')
      this.monsterAttack()
    },
    monsterAttack() {
      this.attack('monster', 'hero')
    },
    attack(givenBy, takenBy) {
      const { life } = this[takenBy]
      const { maxAttack, minAttack } = this[givenBy]
      const attackValue = this.attackValue(maxAttack, minAttack)
      this[takenBy].life -= life >= attackValue ? attackValue : life
    },
    attackValue(max, min) {
      return Math.trunc(Math.random() * (max - min) + 1)
    }
  }
})