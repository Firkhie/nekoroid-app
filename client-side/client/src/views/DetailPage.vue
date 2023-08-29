<template>
  <section class="w-full flex flex-col md:flex-row gap-4 md:gap-7 p-5 sm:p-10 shadow-lg bg-white">
    <div class="flex-1 w-full h-fit flex justify-center">
      <img src="../assets/item-1.jpg" alt="">
    </div>
    <div class="flex-1 w-full flex flex-col gap-2">
      <h5 class="font-semibold">Jujutsu Kaisen - Yuji Itadori</h5>
      <p class="text-gray-500 pb-1 lg:pb-3">By Good Smile Company</p>
      <hr>
      <h5 class="font-medium lg:pt-2 text-[#FC4B03]">Rp. 500.000</h5>
      <p>Stock: 5</p>
      <div class="flex items-center gap-5 md:gap-7 border-2 border-black py-[6px] md:py-2 px-4 w-fit rounded-md font-semibold"> 
        <i class="fa-solid fa-minus"></i>
        <p class="">0</p>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class="flex gap-2 sm:gap-3 pt-3 md:pt-5 pb-3 text-white">
        <button class="py-3 sm:py-4 px-4 sm:px-6 lg:px-10 rounded-md bg-red-600 flex gap-2 items-center"><i class="fa-solid text-base md:text-lg fa-heart"></i>Wishlist</button>
        <button class="py-3 sm:py-4 rounded-md bg-[#FC4B03] w-full">Add to Cart</button>
      </div>
      <hr>
      <p class="pt-3">"I'm not gonna regret the way I live!"
        From the currently airing anime series "Jujutsu Kaisen" comes a Nendoroid of the main character Yuji Itadori! He comes with three face plates including a standard expression, a combat expression and a smiling expression! Optional parts include the finger of the Double-Faced Specter and effect parts for recreating combat sequences. Be sure to add him to your collection!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailPage'
}
</script>

<style scoped></style>