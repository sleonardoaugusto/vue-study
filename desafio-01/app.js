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
        },
        getImage() {
            return 'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'
        }
    },
    computed: {
        multiplyByThree() {
            return this.person.age * 3
        }
    }
})