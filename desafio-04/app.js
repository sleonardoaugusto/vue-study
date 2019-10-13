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
      minAttack: 7,
      specialAttack: 3
    },
    monster: {
      name: 'Demogorgon',
      life: 100,
      maxAttack: 13,
      minAttack: 9
    }
  },
  methods: {
    startGame() {
      this.hero.life = 100
      this.monster.life = 100
      this.game.started = true
    },
    heroAttack(special = false) {
      this.attack('hero', 'monster', special)
      this.monsterAttack()
    },
    monsterAttack() {
      this.attack('monster', 'hero')
    },
    attack(givenBy, takenBy, special) {
      const { life } = this[takenBy]
      const { maxAttack, minAttack } = this[givenBy]
      const attackValue = this.attackValue(maxAttack, minAttack, special)
      this[takenBy].life -= life >= attackValue ? attackValue : life
    },
    attackValue(max, min, special) {
      const specialAttack = special ? this.hero.specialAttack : 0
      const value = Math.random() * (max - min) + min
      return Math.round(value + specialAttack)
    }
  },
  computed: {
    hasResult() {
      return this.monster.life == 0 || this.hero.life == 0
    }
  }
})