<template>
  <div id="app" class="wrap column">
    <div class="wrap column">
      <h1>App</h1>
      <app-input @taskAdded="add"/>
    </div>
    <div class="progressbar">
      <div class="progress" :style="{width: progressPercentage + '%'}"></div>
    </div>
    <div class="wrap">
      <app-card v-for="(c, i) in cards" :card="c" :key="i" @closeCard="close(i)" @doneOrUndone="computeProgress"/>
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
    cards: [],
    progress: 0
  }),
  methods: {
    add(task) {
      const reallyNew = !this.cards.find(c => c.title == task)
      if (reallyNew)
        this.cards.push({ title: task, pending: true })
    },
    close(i) {
      this.cards.splice(i, 1)
    },
    computeProgress(e) {
      !e ? this.progress++ : this.progress--
    }
  },
  computed: {
    progressPercentage() {
      return (this.progress * 100 / this.cards.length) || 0
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
    flex-wrap: wrap;
  }

  .wrap.column {
    flex-direction: column;
  }

  .progressbar {
    height: 1.7rem;
    border: 2px solid #2c3e50;
    border-radius: 10px;
    width: 560px;
    margin: 15px;
  }

  .progress {
    height: 100%;
    background-color: #49b057;
    border-radius: 7px;
  }

</style>
