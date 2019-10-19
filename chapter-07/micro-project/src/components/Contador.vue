<template>
  <section id="contador">
    <span class="small">{{ contador }}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </section>
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
    margin: 5px;
    border-radius: 15px;
    background-color: #E57E81;
    border-style: none;
    cursor: pointer;
    outline: none;
  }


</style>