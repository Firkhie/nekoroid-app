<template>
  <section class="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] text-white overflow-hidden">
    <!-- Carousel Button -->
    <div class="absolute text-black top-3 md:top-6 right-3 md:right-6 z-10">
      <button class="bg-white hover:bg-[#FC4B03] hover:text-white py-1 lg:py-2 px-2 md:px-3 lg:px-4 rounded-l-lg text-xs sm:text-sm md:text-base" @click.prevent="heroPrevButton"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="bg-white hover:bg-[#FC4B03] hover:text-white py-1 lg:py-2 px-2 md:px-3 lg:px-4 rounded-r-lg text-xs sm:text-sm md:text-base" @click.prevent="heroNextButton"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <!-- Carousel Items -->
    <div ref="heroCarousel" class="flex w-full h-full" style=" -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;">
      <div v-for="(item, index) in items" :key="index" :style="{ backgroundImage: 'url(' + item.image + ')' }" class="hero-carousel-item flex flex-col p-4 items-center justify-center min-w-full h-full gap-5 md:gap-10 bg-center bg-cover bg-no-repeat rounded-lg">
        <h1 class="text-center">{{ item.description }}</h1>
        <div class="flex gap-2 md:gap-3">
          <a href="#" class="flex gap-3 items-center justify-center bg-white hover:bg-[#FC4B03] text-black hover:text-white py-2 md:py-3 px-4 md:px-6 rounded-md">
            <p>Shop Now</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/hero-2.jpg';
import image2 from '@/assets/hero-3.jpg';
import image3 from '@/assets/hero-4.jpg';
import image4 from '@/assets/hero-5.jpg';

export default {
  name: 'HomeHero',
  data() {
    return { 
      items: [
        {
          image: image1,
          description: 'Discover adorable and cute anime Nendoroids for sale!'
        },
        {
          image: image2,
          description: 'Collect your favorite anime characters as Nendoroid figures!'
        },
        {
          image: image3,
          description: 'Embrace the world of anime with our Nendoroid collection!'
        },
        {
          image: image4,
          description: 'Get your hands on cute and collectible anime Nendoroids!'
        },
      ],
      currentIndex: 0,
      itemWidth: 0
    }
  },
  methods: {
    moveCarousel() {
      this.$refs.heroCarousel.style.transition = "transform 0.3s ease-in-out"
      this.$refs.heroCarousel.style.transform = `translateX(${-this.currentIndex * this.itemWidth}px)`
    },
    autoplay() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
      this.moveCarousel()
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval)
      this.autoplayInterval = null
    },
    startAutoplay() {
      if (!this.autoplayInterval) {
        this.autoplayInterval = setInterval(this.autoplay, 4000)
      }
    },
    heroPrevButton() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
      this.moveCarousel()
    },
    heroNextButton() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
      this.moveCarousel()
    },
    resizeHandler() {
      this.itemWidth = this.$refs.heroCarousel.clientWidth
      this.moveCarousel()
    },
  },
  mounted() {
    this.itemWidth = this.$refs.heroCarousel.clientWidth;
    window.addEventListener("resize", this.resizeHandler);
    this.startAutoplay();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
    this.stopAutoplay();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
    this.stopAutoplay();
  },
}
</script>

<style></style>
