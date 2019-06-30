new Vue({
    el: '#desafio',
    data: {
        person: {
            name: 'Leonardo',
            age: 23
        }
    },
    methods: {
      randint() {
          return Math.random()
      }
    },
    computed: {
        multiplyByThree() {
            return this.person.age * 3
        }
    }
})