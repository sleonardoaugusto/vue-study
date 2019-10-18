<template>
  <div id="contador">
    <span class="small">{{ contador }}</span>
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
  #contador span {
    border-bottom: 1px solid #D4D4D4;
    height: 30px;
    padding: 5px 25px;
  }

  #contador button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }


</style>