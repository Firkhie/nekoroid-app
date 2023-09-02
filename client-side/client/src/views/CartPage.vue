<template>
  <main class="relative w-full px-6 md:px-8 lg:px-32 mt-20 md:mt-24 lg:mt-28 flex-1">
    <section class="w-full flex flex-col lg:flex-row gap-4 lg:gap-5">
      <!-- Cart -->
      <div class="flex-[70%] flex flex-col gap-2 shadow-lg bg-white rounded-md p-5 h-fit">
        <h5 class="font-semibold">Shopping Cart</h5>
        <hr>
        <!-- Items -->
        <div class="flex flex-col lg:gap-3 gap-5 pt-3 w-full">
          <div class="flex border-b-2 lg:border-none pb-2">
            <!-- Left -->
            <div class="w-full lg:flex-[70%] flex flex-col lg:flex-row gap-4">
              <img src="../assets/item-1.jpg" alt="" class="max-w-[75px] lg:max-w-[150px] h-fit rounded-md">
              <div class="flex flex-col gap-3 justify-between w-full">
                <div class="flex flex-col gap-1">
                  <p>Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
                  <p class="text-[#FC4B03]">Rp 500.000</p>
                </div>
                <div class="flex lg:hidden gap-4 items-center text-[10px] sm:text-xs py-1 px-3 border-2 w-fit rounded-md">
                  <i class="fa-solid fa-minus"></i>
                  <p class="text-xs sm:text-sm">0</p>
                  <i class="fa-solid fa-plus"></i>
                </div>
                <!-- Desktop -->
                <div class="hidden lg:flex gap-2 text-xs">
                  <button class="flex items-center justify-center gap-2 py-2 px-3 bg-red-600 text-white rounded-md">
                    <i class="fa-solid fa-heart"></i>
                    <p>Wishlist</p>
                  </button>
                  <button class="flex items-center justify-center gap-2 py-2 px-3 bg-[#FC4B03] text-white rounded-md">
                    <i class="fa-solid fa-trash"></i>
                    <p>Delete</p>
                  </button>
                </div>
                <!-- Mobile -->
                <div class="flex lg:hidden justify-between lg:justify-normal">
                  <div class="flex flex-col gap-1">
                    <p class="text-xs text-gray-500">Subtotal</p>
                    <p class="text-[#FC4B03] font-semibold">Rp. 1.000.000</p>
                  </div>
                  <div class="flex items-center justify-center gap-4 md:gap-5 text-base md:text-xl">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right -->
            <div class="hidden lg:flex-[30%] lg:flex gap-5 justify-end">
              <div class="flex flex-col gap-1 items-center">
                <p class="text-gray-500">Qty</p>
                <div class="flex gap-4 items-center justify-center text-xs">
                  <i class="fa-solid fa-minus"></i>
                  <p class="text-sm">0</p>
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-gray-500">Subtotal</p>
                <p class="text-[#FC304B] font-semibold">Rp 10.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Price -->
      <div class="flex-[30%] flex flex-col gap-2 items-center justify-center shadow-lg bg-white rounded-md p-4 h-fit">
        <p>Total Price</p>
        <h5 class="text-[#FC304B] font-semibold">Rp 10.000.000</h5>
        <a href="#" class="w-full py-3 bg-[#FC4B03] flex items-center justify-center text-white text-xs rounded-md">Checkout</a>
        <hr class="w-full">
        <p class="text-gray-500 text-xs">Just one more step to complete the payment of your items</p>
      </div>
    </section> 
  </main>
</template>

<script>
export default {
  name: 'CartPage'
}
</script>

<style scoped></style>