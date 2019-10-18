<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <contador v-for="i in 3" :key="i"/>
  </div>
</template>

<script>
import Contador from '@/components/Contador'

export default {
  name: 'Contadores',
  components: {
    'contador': Contador
  }

}
</script>

<style scoped>

</style>