<template>
  <v-app>

    <Menu/>

    <Toolbar/>

    <Carousel/>

    <Footer/>

  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Menu, Carousel, Footer, Toolbar
  },
  data() {
    return {}
  }
}
</script>
