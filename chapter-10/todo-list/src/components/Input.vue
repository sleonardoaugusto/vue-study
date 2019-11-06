<template>
  <div id="input">
    <input type="text" @input="setValue" @keypress.enter="submit">
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: () => ({
    value: ''
  }),
  methods: {
    submit() {
      this.$emit('submit', this.value)
    },
    setValue(e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>

  input {
    width: 240px;
    padding: 4px 7px;
    border: 2px solid #FE6D73;
    border-radius: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    outline: none;
  }

</style>