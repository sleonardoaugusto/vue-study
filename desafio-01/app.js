new Vue({
    el: '#desafio',
    data: {
        person: {
            name: 'Leonardo',
            age: 23
        }
    },
    computed: {
        multiplyByThree() {
            return this.person.age * 3
        }
    }
})