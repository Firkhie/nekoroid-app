<template>
  <div class="flex flex-col lg:flex-row text-xs lg:text-sm">
    <Sidebar v-if="!isLoginRegister"/>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';

export default {
  components: { Sidebar },
  computed: {
    isLoginRegister() {
      return this.$route.name === 'login' || this.$route.name === 'register' 
    }
  }
}
</script>

<style scoped></style>
