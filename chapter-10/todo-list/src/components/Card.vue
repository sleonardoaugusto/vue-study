<template>
  <div class="card wrap column">
    <span @click="close" class="close">x</span>
    <div class="content">
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
    margin: 20px;
    background-color: #FFCB77;
    border: 2px solid #FFCB77;
    color: #FFF;
    font-weight: 600;
    border-radius: 10px;
    max-width: 150px;
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
  }

  .card .content {
    padding: 5px 10px;
  }
</style>