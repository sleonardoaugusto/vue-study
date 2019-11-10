<template>
  <div :key="key" @click="doneOrUndone" class="card wrap column" :class="stateClass">
    <span @click="close" class="close">x</span>
    <div class="content">
      <p>{{ card.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    card: {},
    key: ''
  }),
  methods: {
    close() {
      this.$emit('closeCard')
    },
    doneOrUndone() {
      this.card.pending = !this.card.pending
      this.$emit('doneOrUndone', this.card.pending)
      this.refresh()
    },
    refresh() {
      this.key = Math.random()
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.card.pending,
        done: !this.card.pending
      }
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pending {
    background-color: #FFCB77;
    border: 2px solid #FFCB77;
  }

  .done {
    background-color: #49b057 !important;
    border: 2px solid #49b057 !important;
    text-decoration: line-through;
  }

  .card .close {
    padding: 5px 5px 0;
    height: 20px;
    width: 20px;
    align-self: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
  }

  .card .content {
    padding: 5px 10px;
  }

</style>