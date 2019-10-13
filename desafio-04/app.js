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
      specialAttack: 4
    },
    monster: {
      name: 'Demogorgon',
      life: 100,
      maxAttack: 12,
      minAttack: 9
    }
  },
  methods: {
    startGame() {
      this.hero.life = 100
      this.monster.life = 100
      this.game.started = true
    },
    attack(special) {
      this.hurt('hero', 'monster', special)
      this.hurt('monster', 'hero', false)
    },
    hurt(givenBy, takenBy, special) {
      const { life } = this[takenBy]
      const { maxAttack, minAttack } = this[givenBy]
      const attackValue = this.attackValue(maxAttack, minAttack, special)
      this[takenBy].life -= life >= attackValue ? attackValue : life
    },
    attackValue(max, min, special) {
      const plus = special ? this.hero.specialAttack : 0
      return this.getRandom(min + plus, max + plus)
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },
  computed: {
    hasResult() {
      return this.monster.life == 0 || this.hero.life == 0
    }
  }
})