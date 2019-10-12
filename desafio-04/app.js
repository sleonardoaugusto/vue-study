new Vue({
  el: '#desafio',
  data: {
    monster: {
      life: 20
    },
    hero: {
      life: 50
    }
  },
  methods: {
    getBgColor(life) {
      return life > 20 ? 'green' : 'red'
    }
  }
})