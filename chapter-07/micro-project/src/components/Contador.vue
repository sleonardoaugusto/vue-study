<template>
  <div id="contador">
    <span>{{ contador }}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    increment() {
      this.contador++
    },
    decrement() {
      this.contador--
    }
  }
}
</script>

<style scoped>

</style>