<template>
  <main class="relative w-full px-6 md:px-8 lg:px-32 mt-20 md:mt-24 lg:mt-28 flex-1">
    <section class="w-full flex gap-5">
      <!-- Filter -->
      <div class="w-[250px] h-fit bg-white shadow-lg p-4 hidden lg:flex flex-col gap-3 rounded-md">
        <p class="text-base font-semibold">Filter</p>
        <hr>
        <div class="flex flex-col gap-3">
          <CatalogFilter />  
        </div>
      </div>
      <!-- Main Content -->
      <div class="flex-1 h-fit bg-white shadow-lg flex flex-col p-5 gap-3 rounded-md">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between">
          <h5 class="font-medium">All Items</h5>
          <p class="pb-3 text-gray-500 lg:hidden">Showing 1-20 of 100 items</p>
          <!-- Desktop -->
          <div class="hidden lg:flex gap-4 items-center justify-center">
            <p>Sort By</p>
            <div class="relative w-[220px] cursor-pointer group">
              <div class="flex justify-between items-center py-2 px-4 border-2 rounded-md" @click.prevent="sortToggleBtn">
                <span>{{ selectedOption }}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <ul ref="sortMenu" class="absolute flex-col bg-white border-2 rounded-md w-full cursor-pointer lg:top-[45px] left-0 hidden">
                <li class="p-3 hover:bg-[#FC4B03] hover:rounded-t-md" @click.prevent="selectOption('Relevance')">Relevance</li>
                <li class="p-3 hover:bg-[#FC4B03]" @click.prevent="selectOption('Latest')">Latest</li>
                <li class="p-3 hover:bg-[#FC4B03]" @click.prevent="selectOption('Oldest')">Oldest</li>
                <li class="p-3 hover:bg-[#FC4B03]" @click.prevent="selectOption('Highest Price')">Highest Price</li>
                <li class="p-3 hover:bg-[#FC4B03] hover:rounded-b-md" @click.prevent="selectOption('Lowest Price')">Lowest Price</li>
              </ul>
            </div>
          </div>
          <!-- Mobile -->
          <div class="lg:hidden flex gap-3 items-center w-full text-white">
            <!-- Filter -->
            <button class="flex-[50%] flex gap-2 sm:gap-3 items-center justify-center py-3 bg-[#FC4B03] rounded-md" @click.prevent="filterOpenBtn">
              <i class="fa-solid fa-filter text-base"></i>
              Filters
            </button>
            <dialog ref="filterMenu" class="w-[250px] sm:w-[350px] md:w-[400px] h-fit bg-white shadow-lg p-4 rounded-md">
              <div class="flex items-center justify-between pb-3">
                <p class="text-base font-semibold">Category</p>
                <button class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white" @click.prevent="filterCloseBtn">
                  <i class="fa-solid fa-x text-[8px]"></i>
                  <p>Close</p>
                </button>
              </div>
              <hr>
              <div class="flex flex-col gap-3 pt-3">
                <CatalogFilter />
              </div>
            </dialog>
            <!-- Sort By -->
            <button class="flex-[50%] flex gap-2 sm:gap-3 items-center justify-center py-3 bg-[#FC4B03] rounded-md" @click.prevent="sortOpenBtn">
              <i class="fa-solid fa-arrow-down-wide-short text-base"></i>
              {{ selectedOption }}
            </button>
            <dialog ref="sortMenuModal" class="w-[250px] sm:w-[350px] md:w-[400px] h-fit bg-white shadow-lg p-4 rounded-md">
              <div class="flex items-center justify-between pb-3">
                <p class="text-base font-semibold">Sort By</p>
                <button class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white" @click.prevent="sortCloseBtn">
                  <i class="fa-solid fa-x text-[8px]"></i>
                  <p>Close</p>
                </button>
              </div>
              <hr>
              <ul class="bg-white cursor-pointer">
                <li class="p-3 hover:bg-[#FC4B03] hover:text-white" @click.prevent="selectOptionModal('Relevance')">Relevance</li>
                <li class="p-3 hover:bg-[#FC4B03] hover:text-white" @click.prevent="selectOptionModal('Latest')">Latest</li>
                <li class="p-3 hover:bg-[#FC4B03] hover:text-white" @click.prevent="selectOptionModal('Oldest')">Oldest</li>
                <li class="p-3 hover:bg-[#FC4B03] hover:text-white" @click.prevent="selectOptionModal('Highest Price')">Highest Price</li>
                <li class="p-3 hover:bg-[#FC4B03] hover:text-white" @click.prevent="selectOptionModal('Lowest Price')">Lowest Price</li>
              </ul>
            </dialog>
          </div>
        </div>
        <hr>
        <!-- Items -->
        <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 pt-1 sm:pt-3">
          <CatalogItem />
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
  </main>
</template>

<script>
import CatalogFilter from '../components/CatalogFilter.vue';
import CatalogItem from '../components/CatalogItem.vue';

export default {
    name: 'CatalogPage',
    components: { CatalogFilter, CatalogItem },
    data() {
      return {
        selectedOption: 'Relevance'
      }
    },
    methods: {
      filterOpenBtn() {
        this.$refs.filterMenu.showModal()
      },
      filterCloseBtn() {
        this.$refs.filterMenu.close()
      },
      sortToggleBtn() {
        this.$refs.sortMenu.classList.toggle('hidden')
      },
      selectOption(option) {
        this.selectedOption = option
        this.$refs.sortMenu.classList.toggle('hidden')
      },
      selectOptionModal(option) {
        this.selectedOption = option
        this.sortCloseBtn()
      },
      sortOpenBtn() {
        this.$refs.sortMenuModal.showModal()
      },
      sortCloseBtn() {
        this.$refs.sortMenuModal.close()
      },
    }
}
</script>

<style scoped></style>