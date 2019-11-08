<template>
  <div class="wrap row">
    <div class="card wrap column">
      <span @click="close" class="close">x</span>
      <p>{{ data.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    close() {
      this.$emit('closeCard')
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    background-color: #FFCB77;
    border: 2px solid #FFCB77;
    color: #FFF;
    font-weight: 600;
    border-radius: 10px;
    padding: 10px 25px;
    margin: 25px;
    max-width: 150px;
  }

  .close {
    align-self: flex-end;
    cursor: pointer;
  }

  p {
    max-width: 100%;
    word-break: break-all;
  }
</style>