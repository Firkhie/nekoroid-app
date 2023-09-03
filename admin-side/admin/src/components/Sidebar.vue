<template>
  <header class="relative w-full lg:w-[230px] xl:w-[250px] lg:min-h-screen">
    <!-- Desktop -->
    <div class="w-full h-full bg-white hidden lg:flex flex-col p-6 shadow-lg">
      <router-link to="/"><h5 class="text-[#FC4B03]">Nekoroid</h5></router-link>
      <hr>
      <div class="flex flex-col gap-1 mt-4">
        <router-link to="/" class="flex gap-3 items-center p-4 hover:bg-[#FC4B03] hover:text-white rounded-md">
          <i class="fa-solid fa-house"></i>
          <p>Dashboard</p>
        </router-link>
        <router-link to="/categories" class="flex gap-3 items-center p-4 hover:bg-[#FC4B03] hover:text-white rounded-md">
          <i class="fa-solid fa-box"></i>
          <p>Categories</p>
        </router-link>
        <router-link to="/manufacturers" class="flex gap-3 items-center p-4 hover:bg-[#FC4B03] hover:text-white rounded-md">
          <i class="fa-solid fa-industry"></i>
          <p>Manufacturers</p>
        </router-link>
      </div>
    </div>
    <!-- Mobile -->
    <div class="flex lg:hidden items-center justify-between bg-white shadow-lg p-5">
      <router-link to="/"><h5 class="text-[#FC4B03]">Nekoroid</h5></router-link>
      <i class="fa-solid fa-bars text-lg text-[#FC4B03] font-bold cursor-pointer" @click="navbarToggleBtn"></i>
    </div>
    <div ref="navbarMenu" class="absolute close-navbarMenu left-0 w-full h-fit lg:hidden flex flex-col items-center justify-center font-medium z-20 bg-white border-t-2 border-b-2">
      <router-link to="/" class="p-4 hover:bg-[#FC4B03] w-full text-center" @click.prevent="closeMenu">Dashboard</router-link>
      <router-link to="/categories" class="p-4 hover:bg-[#FC4B03] w-full text-center" @click.prevent="closeMenu">Categories</router-link>
      <router-link to="/manufacturers" class="p-4 hover:bg-[#FC4B03] w-full text-center" @click.prevent="closeMenu">Manufacturers</router-link>
      <button class="p-4 hover:bg-[#FC4B03] w-full text-center" @click.prevent="clickLogout">Logout</button>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'Sidebar',
  methods: {
    closeMenu() {
      this.$refs.navbarMenu.classList.add("close-navbarMenu")
      this.$refs.navbarMenu.classList.remove("open-navbarMenu")
    },
    navbarToggleBtn() {
      if (this.$refs.navbarMenu.classList.contains("close-navbarMenu")) {
        this.$refs.navbarMenu.classList.add("open-navbarMenu")
        this.$refs.navbarMenu.classList.remove("close-navbarMenu")
      } else if (this.$refs.navbarMenu.classList.contains("open-navbarMenu")) {
        this.$refs.navbarMenu.classList.add("close-navbarMenu")
        this.$refs.navbarMenu.classList.remove("open-navbarMenu")
      }
    },
    ...mapActions(useCounterStore, ['handleLogout']),
    clickLogout() {
      this.handleLogout()
    },
  }
}
</script>

<style></style>