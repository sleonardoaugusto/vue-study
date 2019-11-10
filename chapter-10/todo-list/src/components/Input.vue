<template>
  <div id="input">
    <input type="text" @input="setValue" @keypress.enter="add">
    <span class="plus" @click="add">+</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    value: ''
  }),
  methods: {
    add() {
      if (this.value.length)
        this.$emit('taskAdded', this.value)
    },
    setValue(e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>

  #input {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  input {
    width: 240px;
    padding: 0.3rem;
    border: 2px solid #FE6D73;
    border-radius: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    outline: none;
  }

  .plus {
    position: absolute;
    border: 1px solid #FE6D73;
    background-color: #FE6D73;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-weight: 600;
    color: #FFF;
    cursor: pointer;
    padding: 0.2rem 0.4rem;
  }


</style>