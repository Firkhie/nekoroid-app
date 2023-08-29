<template>
  <section class="w-full flex gap-5">
    <div class="w-[250px] h-fit bg-white shadow-lg p-4 hidden lg:flex flex-col gap-3 rounded-md">
      <p class="text-base font-semibold">Category</p>
      <hr>
      <div class="flex flex-col gap-3 pl-3">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">One Piece</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">Naruto</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">Jujutsu Kaisen</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">Genshin Impact</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">Nikke</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
          <span class="text-gray-500">Hunter x Hunter</span>
        </label>         
      </div>
    </div>
    <div class="flex-1 h-fit bg-white shadow-lg flex flex-col p-5 gap-3 rounded-md">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between">
        <h5 class="font-medium">All Items</h5>
        <p class="pb-3 text-gray-500 lg:hidden">Showing 1-20 of 100 items</p>
        <!-- Desktop -->
        <div class="hidden lg:flex gap-4 items-center justify-center">
          <p>Sort By</p>
          <div class="relative w-[220px] cursor-pointer group">
            <div id="sort-by-btn" class="flex justify-between items-center py-2 px-4 border-2 rounded-md">
              <span id="sort-by-selected">Relevance</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <ul id="sort-by-menu" class="absolute flex-col bg-white border-2 rounded-md w-full cursor-pointer lg:top-[45px] left-0 hidden">
              <li class="p-3 hover:bg-[#FC4B03] hover:rounded-t-md">Relevance</li>
              <li class="p-3 hover:bg-[#FC4B03]">Latest</li>
              <li class="p-3 hover:bg-[#FC4B03]">Oldest</li>
              <li class="p-3 hover:bg-[#FC4B03]">Highest Price</li>
              <li class="p-3 hover:bg-[#FC4B03] hover:rounded-b-md">Lowest Price</li>
            </ul>
          </div>
        </div>
        <!-- Mobile -->
        <div class="lg:hidden flex gap-3 items-center w-full text-white">
          <!-- Filter -->
          <button id="filter-modal-open-btn" class="flex-[50%] flex gap-2 sm:gap-3 items-center justify-center py-3 bg-[#FC4B03] rounded-md">
            <i class="fa-solid fa-filter text-base"></i>
            Filters
          </button>
          <dialog id="filter-modal-menu" class="w-[250px] sm:w-[350px] md:w-[400px] h-fit bg-white shadow-lg p-4 rounded-md">
            <div class="flex items-center justify-between pb-3">
              <p class="text-base font-semibold">Category</p>
              <button id="filter-modal-close-btn" class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white">
                <i class="fa-solid fa-x text-[8px]"></i>
                <p>Close</p>
              </button>
            </div>
            <hr>
            <div class="flex flex-col gap-3 pt-3">
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">One Piece</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">Naruto</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">Jujutsu Kaisen</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">Genshin Impact</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">Nikke</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>
              <label class="flex items-center justify-between cursor-pointer">
                <span class="text-gray-500">Hunter x Hunter</span>
                <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
              </label>         
            </div>
          </dialog>
          <!-- Sort By -->
          <button id="sortby-modal-open-btn" class="flex-[50%] flex gap-2 sm:gap-3 items-center justify-center py-3 bg-[#FC4B03] rounded-md">
            <i class="fa-solid fa-arrow-down-wide-short text-base"></i>
            Relevance
          </button>
          <dialog id="sortby-modal-menu" class="w-[250px] sm:w-[350px] md:w-[400px] h-fit bg-white shadow-lg p-4 rounded-md">
            <div class="flex items-center justify-between pb-3">
              <p class="text-base font-semibold">Sort By</p>
              <button id="sortby-modal-close-btn" class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white">
                <i class="fa-solid fa-x text-[8px]"></i>
                <p>Close</p>
              </button>
            </div>
            <hr>
            <ul id="sort-by-menu" class="bg-white cursor-pointer">
              <li class="p-3 hover:bg-[#FC4B03] hover:text-white">Relevance</li>
              <li class="p-3 hover:bg-[#FC4B03] hover:text-white">Latest</li>
              <li class="p-3 hover:bg-[#FC4B03] hover:text-white">Oldest</li>
              <li class="p-3 hover:bg-[#FC4B03] hover:text-white">Highest Price</li>
              <li class="p-3 hover:bg-[#FC4B03] hover:text-white">Lowest Price</li>
            </ul>
          </dialog>
        </div>
      </div>
      <hr>
      <!-- Items -->
      <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 pt-1 sm:pt-3">
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
        <div class="w-full flex flex-col gap-1 cursor-pointer">
          <img src="../assets/item-1.jpg" alt="" class="w-full object-cover object-center rounded-md">
          <p class="px-4 bg-gray-200 w-fit rounded-md text-xs mt-1 line-clamp-1">Jujutsu Kaisen</p>
          <div class="flex flex-col gap-0">
            <p class="font-bold line-clamp-2">Nendoroid Jujutsu Kaisen - Yuji Itadori</p>
            <p class="text-xs md:text-sm text-[#FC4B03] font-medium">Rp. 500.000</p>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="flex items-center justify-center mt-6 md:text-sm text-xs">
        <div class="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-[4px] bg-[#FC4B03] text-white h-10 gap-2"><i class="fa-solid fa-chevron-left text-xs"></i> Prev</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-[4px] bg-gray-200 hover:bg-gray-300 h-10">1</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-[4px] bg-gray-200 hover:bg-gray-300 h-10">2</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-[4px] bg-gray-200 hover:bg-gray-300 h-10">3</button>
          <button class="flex items-center justify-center p-3 sm:p-4 rounded-[4px] bg-[#FC4B03] text-white h-10 gap-2">Next <i class="fa-solid fa-chevron-right text-xs"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CatalogPage'
}
</script>

<style scoped></style>