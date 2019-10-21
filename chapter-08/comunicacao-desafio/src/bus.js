import Vue from 'vue'

export default new Vue({
  methods: {
    onSelect(user) {
      this.$emit('setUser', user)
    },
    set(callback) {
      this.$on('setUser', callback)
    }
  }
})