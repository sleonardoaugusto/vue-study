new Vue({
  el: '#desafio',
  data: {
    monster: {
      name: 'Demogorgon',
      life: 100,
      maxAttack: 13,
      minAttack: 9
    },
    hero: {
      name: 'Jiraya',
      life: 100,
      maxAttack: 10,
      minAttack: 7
    }
  },
  methods: {
    getBgColor(life) {
      return life > 20 ? 'green' : 'red'
    },
    heroAttack() {
      const { maxAttack, minAttack } = this.hero
      const attackValue = this.attackValue(maxAttack, minAttack)
      this.monster.life -= this.monster.life >= attackValue ? attackValue : this.monster.life
      this.monsterAttack()
    },
    monsterAttack() {
      const { maxAttack, minAttack } = this.monster
      const attackValue = this.attackValue(maxAttack, minAttack)
      this.hero.life -= this.hero.life >= attackValue ? attackValue : this.hero.life
    },
    attackValue(max, min) {
      return Math.trunc(Math.random() * (max - min) + 1)
    }
  }
})