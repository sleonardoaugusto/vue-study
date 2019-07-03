new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Thats my alert!!')
        },
        keyHandle(event) {
            this.valor = event.target.value
        },
        enterKeyHandle(event) {
            this.valor = event.target.value
        }
    }
})
