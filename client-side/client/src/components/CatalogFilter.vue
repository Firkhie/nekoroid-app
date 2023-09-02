<template>
  <label v-for="(item, index) in items" :key="index" class="flex items-center justify-between gap-2 cursor-pointer">
    <span class="text-gray-500">{{ item }}</span>
    <input type="checkbox" class="appearance-none w-[14px] h-[14px] rounded-[3px] border-2 border-[#fc4a03c8] checked:bg-[#FC4B03] cursor-pointer">
  </label>
</template>

<script>
export default {
  name: 'CatalogFilter',
  data() {
    return {
      items: [ 'One Piece', 'Naruto', 'Genshin Impact', 'Nikke', 'Hunter x Hunter', 'Jujutsu Kaisen' ],
    }
  }
}
</script>

<style></style>
