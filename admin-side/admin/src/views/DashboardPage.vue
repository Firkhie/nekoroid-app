<template>
  <main class="relative w-full lg:w-[calc(100%-230px)] xl:w-[calc(100%-250px)] min-h-screen flex flex-col p-6 gap-7">
    <Status />
    <div class="flex flex-col bg-white rounded-md shadow-lg p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-2">
        <p class="text-base md:text-lg font-semibold">Item List</p>
        <button class="flex items-center justify-center rounded-md gap-2 px-4 py-2 bg-[#FC4B03] text-white text-xs md:text-sm" @click.prevent="newItemModalOpen">
          <i class="fa-solid fa-plus"></i>
          <p>New Item</p>
        </button>
      </div>
      <hr>
      <!-- Modal -->
      <dialog ref="newItemModal" class="w-[600px] h-fit bg-white shadow-lg p-4 rounded-md">
        <div class="flex items-center justify-between">
          <h6 class="font-semibold mb-2">Input new Item</h6>
          <button class="flex gap-[6px] items-center justify-center py-1 px-3 bg-[#FC4B03] rounded-md text-[10px] text-white" @click.prevent="newItemModalClose">
            <i class="fa-solid fa-x text-[8px]"></i>
            <p>Close</p>
          </button>
        </div>
        <hr>  
        <form class="flex flex-col gap-2 md:gap-3 w-full mt-3" @submit.prevent="submitNewItem">
          <div class="flex w-full items-center gap-5">
            <p>Name</p>
            <input
              v-model="name"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="text"
              placeholder="Enter item name"
              autocomplete="off"
              required
            />
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Price</p>
            <input
              v-model="price"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="integer"
              placeholder="Enter price (min. 1000)"
              autocomplete="off"
              required
            />
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Image URL</p>
            <input
              v-model="image"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="text"
              placeholder="Enter image URL"
              autocomplete="off"
              required
            />
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Stock</p>
            <input
              v-model="stock"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="integer"
              placeholder="Enter stock (min. 1)"
              autocomplete="off"
              required
            />
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Category</p>
            <select v-model="CategoryId" class="bg-transparent outline-none w-full border-b-2 pt-1">
              <option value="" disabled>Select category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Manufacturer</p>
            <select v-model="ManufacturerId" class="bg-transparent outline-none w-full border-b-2 pt-1">
              <option value="" disabled>Select manufacturer</option>
              <option v-for="manufacturer in manufacturers" :key="manufacturer.id" :value="manufacturer.id">{{ manufacturer.name }}</option>
            </select>
          </div>
          <div class="flex w-full items-center gap-5">
            <p>Description</p>
            <input
              v-model="description"
              class="bg-transparent outline-none w-full border-b-2 pt-1"
              type="text"
              placeholder="Enter description"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" class="w-fit py-2 px-4 rounded-md bg-[#FC4B03] text-white mt-4">Add Item</button>
        </form>
      </dialog>
      <!-- Table -->
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full">
            <div class="overflow-hidden">
              <ItemTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ItemTable from '../components/ItemTable.vue'
import Status from '../components/Status.vue'
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'DashboardPage',
  components: { ItemTable, Status },
  data() {
    return {
        name: '',
        price: 0,
        image: '',
        stock: 0,
        CategoryId: 0,
        ManufacturerId: 0,
        description: '',
    };
  },
  computed: {
    ...mapState(useCounterStore, ['categories']),
    ...mapState(useCounterStore, ['manufacturers'])
  },
  methods: {
    newItemModalOpen() {
      this.$refs.newItemModal.showModal()
    },
    newItemModalClose() {
      this.$refs.newItemModal.close()
    },
    ...mapActions(useCounterStore, ['fetchItems']),
    ...mapActions(useCounterStore, ['fetchCategories']),
    ...mapActions(useCounterStore, ['fetchManufacturers']),
    async fetchData() {
      try {
        await this.fetchCategories();
        await this.fetchManufacturers();
      } catch (err) { 
        console.log(err);
      }
    },
    async fetchDataItems() {
      try {
        await this.fetchItems();
      } catch (err) { 
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ['addNewItem']),
    async submitNewItem() {
      try {
        await this.addNewItem(this.name, this.price, this.image, this.stock, this.CategoryId, this.ManufacturerId, this.description);
      } catch (err) {
        console.error(err)
      } finally {
        this.$refs.newItemModal.close()
        this.fetchData()
        this.fetchDataItems()
        this.name = '',
        this.price = 0,
        this.image = '',
        this.stock = 0,
        this.CategoryId = 0,
        this.ManufacturerId = 0,
        this.description = ''
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped></style>