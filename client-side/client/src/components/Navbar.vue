<template>
  <header id="my-header" class="fixed top-0 left-0 w-full h-16 md:h-20 z-30 md:mb-5 bg-white shadow-lg">
    <!-- DESKTOP -->
    <nav class="hidden lg:flex items-center justify-between gap-20 h-full w-full px-32">
      <!-- Left -->
      <div><a href="#" class="font-bold text-2xl text-[#FC4B03]">Nekoroid</a></div>
      <!-- Mid -->
      <div class="flex flex-1 gap-5 items-center">
        <div class="flex gap-3 items-center justify-center w-full py-2 px-4 border-2 rounded-md">
          <i class="fa-solid fa-magnifying-glass text-[#FC4B03]"></i>
          <input type="text" placeholder="Search product..." class="w-full text-[13px] outline-none"/>
        </div>
        <i class="fa-solid text-lg fa-cart-shopping text-[#FC4B03] cursor-pointer"></i>
        <i class="fa-solid text-lg fa-heart text-[#FC4B03] cursor-pointer"></i>
      </div>
      <!-- Right -->
      <div class="flex items-center justify-between gap-3">
        <a href="#" class="px-4 py-2 rounded-[5px] bg-[#FC4B03] text-white text-xs">Sign Up</a>
        <a href="#" class="px-4 py-2 rounded-[5px] bg-[#FC4B03] text-white text-xs">Log In</a>
      </div>
    </nav>
    <!-- MOBILE -->
    <nav class="relative items-center justify-between h-full w-full gap-10 md:gap-20 px-6 md:px-8 mx-auto flex lg:hidden">
      <!-- Left -->
      <div class="flex gap-4 md:gap-5 items-center text-[#FC4B03]">
        <i id="navbar-menu-open-btn" class="fa-solid fa-bars-staggered text-base md:text-lg cursor-pointer"></i>
        <a href="#" class="font-bold text-base md:text-xl">Nekoroid</a>
      </div>
      <!-- Right -->
      <div class="flex gap-4 md:gap-5 items-center text-[#FC4B03]">
        <i class="fa-solid fa-cart-shopping text-base md:text-lg cursor-pointer"></i>
        <i class="fa-solid fa-heart text-base md:text-lg cursor-pointer"></i>
        <i id="search-btn" class="fa-solid fa-magnifying-glass text-base md:text-lg cursor-pointer"></i>
      </div>
      <!-- Navbar Menu -->
      <div id="navbar-menu" class="fixed w-screen h-screen top-0 left-0 bg-white z-50 overflow-hidden hidden">
        <div class="flex items-center gap-3 w-full p-5 border-b-2 font-semibold text-sm">
          <i id="navbar-menu-close-btn" class="fa-solid fa-chevron-left cursor-pointer font-extrabold"></i>
          <p>Account</p>
        </div>
        <div class="flex items-center gap-3 w-full p-5 border-b-2">
          <i class="fa-regular fa-face-smile text-xl text-[#FC4B03]"></i>
          <p>Firdig Alfalakhi</p>
        </div>
        <div class="group flex items-center gap-3 w-full p-5 cursor-pointer hover:bg-[#FC4B03] hover:text-white">
          <i class="fa-solid fa-circle-user text-sm text-[#FC4B03] group-hover:text-white"></i>
          <p>My Profile</p>
        </div>
        <div class="group flex items-center gap-3 w-full p-5 cursor-pointer hover:bg-[#FC4B03] hover:text-white">
          <i class="fa-solid fa-clock-rotate-left text-sm text-[#FC4B03] group-hover:text-white"></i>
          <p>Order History</p>
        </div>
        <div class="group flex items-center gap-3 w-full p-5 cursor-pointer hover:bg-[#FC4B03] hover:text-white border-b-2">
          <i class="fa-solid fa-right-from-bracket text-sm text-[#FC4B03] group-hover:text-white"></i>
          <p>Log Out</p>
        </div>
      </div>
      <!-- Search Menu -->
      <div id="search-bar" class="absolute w-[75vw] -bottom-[60px] md:-bottom-[75px] bg-white py-2 md:py-3 px-3 md:px-5 z-50 rounded-sm shadow-lg close-search">
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
  name: 'Navbar'
}
</script>

<style scoped></style>
