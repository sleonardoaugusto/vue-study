new Vue({
  el: '#app',
  data: {
    game: {
      started: false,
      log: [],
      names: {
        hero: 'Jiraya',
        monster: 'Demogorgon'
      }
    },
    hero: {
      name: 'Jiraya',
      life: 100,
      maxAttack: 10,
      minAttack: 7,
      specialAttack: 4,
      minHeal: 7,
      maxHeal: 14
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
    heal() {
      const { life, minHeal, maxHeal } = this.hero
      const heal = this.getRandom(minHeal, maxHeal)
      this.hero.life = Math.min(life + heal, 100)
      this.hurt('monster', 'hero', false)
    },
    hurt(givenBy, takenBy, special
    ) {
      const { life } = this[takenBy]
      const { maxAttack, minAttack } = this[givenBy]
      const attack = this.attackValue(maxAttack, minAttack, special)
      this[takenBy].life = Math.max(life - attack, 0)
      this.registerLog(givenBy, takenBy, attack, givenBy)
    },
    attackValue(max, min, special) {
      const plus = special ? this.hero.specialAttack : 0
      return this.getRandom(min + plus, max + plus)
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },

    registerLog(givenBy, takenBy, attack) {
      const { names } = this.game
      this.game.log.unshift(`${names[givenBy]} atingou o ${names[takenBy]} com ${attack}.`)
    }
  },
  computed: {
    hasResult() {
      return this.monster.life == 0 || this.hero.life == 0
    }
  }
})