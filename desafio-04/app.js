new Vue({
  el: '#desafio',
  data: {
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
    heroAttack() {
      this.attack('hero', 'monster')
      this.monsterAttack()
    },
    monsterAttack() {
      this.attack('monster', 'hero')
    },
    attack(givenBy, takenBy) {
      const { maxAttack, minAttack } = this[givenBy]
      const attackValue = this.attackValue(maxAttack, minAttack)
      this[takenBy].life -= this[takenBy].life >= attackValue ? attackValue : this[takenBy].life
    },
    attackValue(max, min) {
      return Math.trunc(Math.random() * (max - min) + 1)
    }
  }
})