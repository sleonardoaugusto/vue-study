<template>
  <div id="app">
    <h1>App</h1>
    <app-input @submit="add"/>
  </div>
</template>

<script>
import Input from '@/components/Input'

export default {
  name: 'app',
  components: {
    'app-input': Input
  },
  data: () => ({
    card: []
  }),
  methods: {
    add(e) {
      this.card.push({ title: e })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: #FEF9EF;
  }
</style>
