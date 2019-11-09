<template>
  <div :key="key" @click="doneOrUndone" class="card wrap column" :class="card.done ? 'done' : 'pending'">
    <span @click="close" class="close">x</span>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({
    card: {},
    key: ''
  }),
  methods: {
    close() {
      this.$emit('closeCard')
    },
    doneOrUndone() {
      this.card.done = !this.card.done
      this.refresh()
    },
    refresh() {
      this.key = Math.random()
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    margin: 20px;
    color: #FFF;
    font-weight: 600;
    border-radius: 10px;
    max-width: 150px;
    cursor: pointer;
  }

  .card.pending {
    background-color: #FFCB77;
    border: 2px solid #FFCB77;
  }

  .card.done {
    background-color: #49b057 !important;
    border: 2px solid #49b057 !important;
  }

  .card .close {
    padding: 5px 5px 0;
    height: 20px;
    width: 20px;
    align-self: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .card p {
    max-width: 100%;
    word-break: break-all;
    margin: .6rem;
  }

  .card .content {
    padding: 5px 10px;
  }

</style>