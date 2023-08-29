<template>
  <footer class="mt-16 w-full h-fit z-20 bg-white font-semibold shadow-2xl">
    <!-- DESKTOP -->
    <div class="hidden flex-row px-8 lg:px-32 items-center justify-center py-8 md:flex">
      <div class="flex items-center justify-start flex-1 gap-5 md:text-sm text-xs">
        <a href="#">About</a>
        <a href="#" class="text-center">Privacy Policy</a>
        <a href="#" class="text-center">Terms of Service</a>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <a href="#" class="text-center text-xl text-[#FC4B03] font-bold">Nekoroid</a>
      </div>
      <div class="flex flex-1 items-center justify-end gap-5">
        <p class="text-center">Contact Us</p>
        <i class="fa-brands fa-whatsapp md:text-2xl text-xl cursor-pointer text-[#FC4B03]"></i>
        <i class="fa-solid fa-envelope md:text-2xl text-xl cursor-pointer text-[#FC4B03]"></i>
        <i class="fa-brands fa-linkedin md:text-2xl text-xl cursor-pointer text-[#FC4B03]"></i>
        <i class="fa-brands fa-instagram md:text-2xl text-xl cursor-pointer text-[#FC4B03]"></i>
      </div>
    </div>
    <!-- MOBILE -->
    <div class="flex flex-col px-6 md:px-8 py-4 md:hidden md:text-base text-sm gap-4">
      <div class="flex-1 flex items-center">
        <a href="#" class="text-center text-base text-[#FC4B03] font-bold">Nekoroid</a>
      </div>
      <div class="grid grid-cols-2 gap-3 text-xs">
        <a href="#">About</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <div class="flex flex-1 items-center gap-3 sm:gap-5 text-[#FC4B03]">
          <i class="fa-brands fa-whatsapp text-lg cursor-pointer"></i>
          <i class="fa-solid fa-envelope text-lg cursor-pointer"></i>
          <i class="fa-brands fa-linkedin text-lg cursor-pointer"></i>
          <i class="fa-brands fa-instagram text-lg cursor-pointer"></i>
        </div>
      </div>
    </div>
    <hr class="border-gray-300 mx-6 md:mx-8 lg:mx-32" />
    <p class="pt-3 md:pt-5 pb-4 md:pb-5 text-center text-zinc-500 font-normal lg:text-sm text-xs">
      © 2023 Nekoroid. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped></style>