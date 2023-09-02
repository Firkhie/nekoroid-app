<template>
  <header id="my-header" class="fixed top-0 left-0 w-full h-16 md:h-20 z-30 md:mb-5 bg-white shadow-lg">
    <!-- DESKTOP -->
    <nav class="hidden lg:flex items-center justify-between gap-20 h-full w-full px-32">
      <!-- Left -->
      <router-link to="/" class="font-bold text-2xl text-[#FC4B03]">Nekoroid</router-link>
      <!-- Mid -->
      <div class="flex flex-1 gap-5 items-center">
        <div class="flex gap-3 items-center justify-center w-full py-2 px-4 border-2 rounded-md">
          <i class="fa-solid fa-magnifying-glass text-[#FC4B03]"></i>
          <input type="text" placeholder="Search product..." class="w-full text-[13px] outline-none"/>
        </div>
        <router-link to="/cart"><i class="fa-solid text-lg fa-cart-shopping text-[#FC4B03] cursor-pointer"></i></router-link>
        <router-link to="/wishlist"><i class="fa-solid text-lg fa-heart text-[#FC4B03] cursor-pointer"></i></router-link>
      </div>
      <!-- Right -->
      <div class="flex items-center justify-between gap-3">
        <router-link to="/login" class="px-4 py-2 rounded-[5px] bg-[#FC4B03] text-white text-xs">Log In</router-link>
        <router-link to="/register" class="px-4 py-2 rounded-[5px] bg-[#FC4B03] text-white text-xs">Sign Up</router-link>
      </div>
    </nav>
    <!-- MOBILE -->
    <nav class="relative items-center justify-between h-full w-full gap-10 md:gap-20 px-6 md:px-8 mx-auto flex lg:hidden">
      <!-- Left -->
      <div class="flex gap-4 md:gap-5 items-center text-[#FC4B03]">
        <i class="fa-solid fa-bars-staggered text-base md:text-lg cursor-pointer" @click.prevent="navbarOpenBtn"></i>
        <router-link to="/" class="font-bold text-base md:text-xl">Nekoroid</router-link>
      </div>
      <!-- Right -->
      <div class="flex gap-4 md:gap-5 items-center text-[#FC4B03]">
        <router-link to="/cart"><i class="fa-solid fa-cart-shopping text-base md:text-lg cursor-pointer"></i></router-link>
        <router-link to="/wishlist"><i class="fa-solid fa-heart text-base md:text-lg cursor-pointer"></i></router-link>
        <i class="fa-solid fa-magnifying-glass text-base md:text-lg cursor-pointer" @click.prevent="searchToggleBtn"></i>
      </div>
      <!-- Navbar Menu -->
      <div ref="navbarMenu" class="fixed w-screen h-screen top-0 left-0 bg-white z-50 overflow-hidden hidden">
        <div class="flex items-center gap-3 w-full p-5 border-b-2 font-semibold text-sm">
          <i class="fa-solid fa-chevron-left cursor-pointer font-extrabold" @click.prevent="navbarCloseBtn"></i>
          <p>Account</p>
        </div>
        <div class="flex items-center gap-3 w-full p-5 border-b-2">
          <i class="fa-regular fa-face-smile text-xl text-[#FC4B03]"></i>
          <p>Firdig Alfalakhi</p>
        </div>
        <router-link to="/history" class="group flex items-center gap-3 w-full p-5 cursor-pointer hover:bg-[#FC4B03] hover:text-white" @click.prevent="navbarCloseBtn">
          <i class="fa-solid fa-clock-rotate-left text-sm text-[#FC4B03] group-hover:text-white"></i>
          <p>Order History</p>
        </router-link>
        <div class="group flex items-center gap-3 w-full p-5 cursor-pointer hover:bg-[#FC4B03] hover:text-white border-b-2">
          <i class="fa-solid fa-right-from-bracket text-sm text-[#FC4B03] group-hover:text-white"></i>
          <p>Log Out</p>
        </div>
      </div>
      <!-- Search Menu -->
      <div ref="searchBar" class="absolute w-[75vw] -bottom-[60px] md:-bottom-[75px] bg-white py-2 md:py-3 px-3 md:px-5 z-50 rounded-sm shadow-lg close-search">
        <div class="flex gap-3 items-center justify-center w-full py-2 px-4 border-2 rounded-md">
          <i class="fa-solid fa-magnifying-glass text-[#FC4B03]"></i>
          <input type="text" placeholder="Search product..." class="w-full text-xs md:text-sm outline-none"/>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    navbarOpenBtn() {
      this.$refs.navbarMenu.classList.add("flex", "flex-col")
      this.$refs.navbarMenu.classList.remove("hidden")
      if (this.$refs.searchBar.classList.contains("open-search")) {
        this.$refs.searchBar.classList.add("close-search")
        this.$refs.searchBar.classList.remove("open-search")
      }
    },
    navbarCloseBtn() {
      this.$refs.navbarMenu.classList.add("hidden")
      this.$refs.navbarMenu.classList.remove("flex", "flex-col")
    },
    searchToggleBtn() {
      if (this.$refs.searchBar.classList.contains("close-search")) {
        this.$refs.searchBar.classList.add("open-search")
        this.$refs.searchBar.classList.remove("close-search")
      } else if (this.$refs.searchBar.classList.contains("open-search")) {
        this.$refs.searchBar.classList.add("close-search")
        this.$refs.searchBar.classList.remove("open-search")
      }
    },
  }
}
</script>

<style scoped></style>

// NAVBAR MENU
<!-- const navbarMenuOpenBtn = document.querySelector("#navbar-menu-open-btn")
const navbarMenuCloseBtn = document.querySelector("#navbar-menu-close-btn")
const navbarMenu = document.querySelector("#navbar-menu")

navbarMenuOpenBtn.addEventListener("click", () => {
  navbarMenu.classList.add("flex", "flex-col")
  navbarMenu.classList.remove("hidden")
  if (searchBar.classList.contains("open-search")) {
    searchBar.classList.add("close-search")
    searchBar.classList.remove("open-search")
  }
})
navbarMenuCloseBtn.addEventListener("click", () => {
  navbarMenu.classList.add("hidden")
  navbarMenu.classList.remove("flex", "flex-col")
}) -->