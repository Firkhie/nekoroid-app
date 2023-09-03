<template>
  <div class="hidden lg:flex items-center justify-between">
    <h6 v-if="isDashboard">Dashboard</h6>
    <h6 v-if="isCategories">Categories</h6>
    <h6 v-if="isManufacturers">Manufacturers</h6>
    <i class="fa-solid fa-user py-1 px-2 bg-gray-600 cursor-pointer text-white text-base rounded-md" @click.prevent="userToggleBtn"></i>
  </div>
  <div ref="userMenu" class="absolute right-6 close-userMenu hidden lg:flex flex-col gap-1 items-center justify-center py-3 px-10 bg-white rounded-md shadow-lg">
    <p>Welcome, {{ fullName }}</p>
    <button class="py-1 px-4 w-fit rounded-md bg-[#FC4B03] text-white text-[13px]" @click.prevent="clickLogout">Logout</button>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 xl:gap-5">
    <div class="flex gap-4 items-center p-6 bg-white rounded-md shadow-lg">
      <i class="fa-solid fa-table p-3 bg-[#FC4B03] text-white text-lg rounded-md"></i>
      <div class="flex flex-col">
        <p class="font-semibold">{{ items.length }}</p>
        <p>Items</p>
      </div>
    </div>
    <div class="flex gap-4 items-center p-6 bg-white rounded-md shadow-lg">
      <i class="fa-solid fa-box p-3 bg-[#FC4B03] text-white text-lg rounded-md"></i>
      <div class="flex flex-col">
        <p class="font-semibold">{{ categories.length }}</p>
        <p>Categories</p>
      </div>
    </div>
    <div class="flex gap-4 items-center p-6 bg-white rounded-md shadow-lg">
      <i class="fa-solid fa-industry p-3 bg-[#FC4B03] text-white text-lg rounded-md"></i>
      <div class="flex flex-col">
        <p class="font-semibold">{{ manufacturers.length }}</p>
        <p>Manufacturers</p>
      </div>
    </div>
    <div class="flex gap-4 items-center p-6 bg-white rounded-md shadow-lg">
      <i class="fa-solid fa-book p-3 bg-[#FC4B03] text-white text-lg rounded-md"></i>
      <div class="flex flex-col">
        <p class="font-semibold">{{ items.length + categories.length + manufacturers.length }}</p>
        <p>Total Data</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'Status',
  data() {
    return {
      fullName: localStorage.getItem('fullName')
    }
  },
  computed: {
    ...mapState(useCounterStore, ['items']),
    ...mapState(useCounterStore, ['categories']),
    ...mapState(useCounterStore, ['manufacturers']),
    isDashboard() {
      return this.$route.name === 'dashboard'
    },
    isCategories() {
      return this.$route.name === 'categories'
    },
    isManufacturers() {
      return this.$route.name === 'manufacturers'
    },
  },
  methods: {
    ...mapActions(useCounterStore, ['handleLogout']),
    clickLogout() {
      this.handleLogout()
    },
    userToggleBtn() {
      if (this.$refs.userMenu.classList.contains("close-userMenu")) {
        this.$refs.userMenu.classList.add("open-userMenu")
        this.$refs.userMenu.classList.remove("close-userMenu")
      } else if (this.$refs.userMenu.classList.contains("open-userMenu")) {
        this.$refs.userMenu.classList.add("close-userMenu")
        this.$refs.userMenu.classList.remove("open-userMenu")
      }
    },
  },
}
</script>

<style scoped></style>