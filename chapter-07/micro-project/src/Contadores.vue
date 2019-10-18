<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <contador v-for="i in 3" :key="i"/>
  </div>
</template>

<script>
export default {
  name: 'Contadores'
}
</script>

<style scoped>

</style>