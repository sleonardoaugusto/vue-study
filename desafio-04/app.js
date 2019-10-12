new Vue({
  el: '#desafio',
  data: {
    monster: {
      name: 'Demogorgon',
      life: 20
    },
    hero: {
      name: 'Jiraya',
      life: 50
    }
  },
  methods: {
    getBgColor(life) {
      return life > 20 ? 'green' : 'red'
    }
  }
})