<template>
  <div v-for="(item, index) in items" :key="index" :style="{ backgroundImage: 'url(' + item.image + ')' }" class="flex flex-col items-center justify-end w-full h-full p-3 lg:p-5 bg-center bg-cover bg-no-repeat rounded-lg">
    <a href="#" class="flex gap-1 sm:gap-3 items-center justify-center bg-white hover:bg-[#FC4B03] text-black py-1 sm:py-2 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-md hover:text-white">
      <p class="line-clamp-1">{{ item.description }}</p>
      <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</template>

<script>
import image1 from '@/assets/hero-2.jpg';
import image2 from '@/assets/hero-3.jpg';
import image3 from '@/assets/hero-4.jpg';
import image4 from '@/assets/hero-5.jpg';

export default {
  name: 'HomeCategory',
  data() {
    return { 
      items: [
        {
          image: image1,
          description: 'Naruto'
        },
        {
          image: image2,
          description: 'Genshin Impact'
        },
        {
          image: image3,
          description: 'Jujutsu Kaisen'
        },
        {
          image: image4,
          description: 'Nikke'
        },
      ]
    }
  }
}
</script>

<style></style>
