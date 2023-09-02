<template>
  <main class="relative w-full px-6 md:px-8 lg:px-32 mt-20 md:mt-24 lg:mt-28 flex-1">
    <section class="flex flex-col gap-2 shadow-lg bg-white rounded-md p-5">
      <h5 class="font-semibold">Order History</h5>
      <hr>
      <div class="flex flex-col lg:gap-3 gap-5 pt-3 w-full">
        <div class="flex border-b-2 lg:border-none pb-2">
          <!-- Left -->
          <div class="w-full lg:flex-[70%] flex flex-col lg:flex-row gap-4">
            <img src="../assets/item-1.jpg" alt="" class="max-w-[90px] h-fit rounded-md">
            <div class="flex flex-col gap-3 justify-between w-full">
              <div class="flex flex-col gap-1">
                <p>Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
                <p class="text-xs text-gray-500">+3 another products</p>
                <p class="text-xs text-[#FC4B03]">Date: 28 August 2023</p>
              </div>
              <!-- Mobile -->
              <div class="flex lg:hidden justify-between lg:justify-normal">
                <div class="flex flex-col gap-1">
                  <p class="text-xs text-gray-500">Total</p>
                  <p class="text-[#FC4B03] font-semibold">Rp. 1.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right -->
          <div class="hidden lg:flex-[30%] lg:flex gap-5 justify-end">
            <div class="flex flex-col gap-1">
              <p class="text-gray-500">Total</p>
              <p class="text-[#FC304B] font-semibold">Rp 10.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HistoryPage'
}
</script>

<style scoped></style>