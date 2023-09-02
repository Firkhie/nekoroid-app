<template>
  <Navbar v-if="!isLoginRegister"/>
  <RouterView />
  <Footer v-if="!isLoginRegister"/>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Navbar, Footer },
  computed: {
    isLoginRegister() {
      return this.$route.name === 'login' || this.$route.name === 'register' 
    }
  }
}
</script>

<style scoped></style>
