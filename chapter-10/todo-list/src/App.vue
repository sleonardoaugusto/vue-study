<template>
  <div id="app">
    <div class="wrap column">
      <h1>App</h1>
      <app-input @submit="add"/>
    </div>
    <div class="wrap">
      <app-card v-for="(c, i) in cards" :key="i" @closeCard="close(i)">
        <p>{{ c.title }}</p>
      </app-card>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Card from '@/components/Card'

export default {
  name: 'app',
  components: {
    'app-input': Input,
    'app-card': Card
  },
  data: () => ({
    cards: []
  }),
  methods: {
    add(e) {
      const _add = (param) => this.cards.push({ title: param })
      const validate = (param) => {
        if (this.cards.length)
          return !!this.cards.find(c => c.title == param)
        return false
      }
      const composeFunctions = (fA, fB) => (e) => {
        if (!fA(e))
          fB(e)
      }
      const addIfValidated = composeFunctions(validate, _add)
      addIfValidated(e)
    },
    close(i) {
      this.cards.splice(i, 1)
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
    flex-flow: wrap;
    justify-content: center;
    max-width: 100%;
    background-color: #FEF9EF;
  }

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap.column {
    flex-direction: column;
  }


</style>
