// NAVBAR MENU
const navbarMenuOpenBtn = document.querySelector("#navbar-menu-open-btn")
const navbarMenuCloseBtn = document.querySelector("#navbar-menu-close-btn")
const navbarMenu = document.querySelector("#navbar-menu")
navbarMenuOpenBtn.addEventListener("click", () => {
  navbarMenu.classList.add("flex", "flex-col")
  navbarMenu.classList.remove("hidden")
  if (searchBar.classList.contains("open-search")) {
    searchBar.classList.add("close-search")
    searchBar.classList.remove("open-search")
  }
})
navbarMenuCloseBtn.addEventListener("click", () => {
  navbarMenu.classList.add("hidden")
  navbarMenu.classList.remove("flex", "flex-col")
})

// SEARCH
const searchBtn = document.querySelector("#search-btn")
const searchBar = document.querySelector("#search-bar")
searchBtn.addEventListener("click", () => {
  if (searchBar.classList.contains("close-search")) {
    searchBar.classList.add("open-search")
    searchBar.classList.remove("close-search")
  } else if (searchBar.classList.contains("open-search")) {
    searchBar.classList.add("close-search")
    searchBar.classList.remove("open-search")
  }
})

// SORT BY
let sortByBtn = document.querySelector('#sort-by-btn');
let sortBySelected = document.querySelector('#sort-by-selected')
let sortByMenu = document.querySelector('#sort-by-menu')
let sortByMenuItem = document.querySelectorAll('#sort-by-menu li')
// Sort-by Button
sortByBtn.addEventListener("click", () => {
  sortByMenu.classList.toggle("hidden")
})
// Sort-by Menu
sortByMenuItem.forEach((menu) => {
  menu.addEventListener("click", () => {
    sortBySelected.innerText = menu.innerText;
    sortbyModalOpenBtn.innerText = menu.innerText;
  })
})

// FILTER MODAL
const filterModalOpenBtn = document.querySelector('#filter-modal-open-btn')
const filterModalCloseBtn = document.querySelector('#filter-modal-close-btn')
const filterModalMenu = document.querySelector('#filter-modal-menu')
filterModalOpenBtn.addEventListener("click", () => {
  filterModalMenu.showModal()
})
filterModalCloseBtn.addEventListener("click", () => {
  filterModalMenu.close()
})

// SORTBY MODAL
const sortbyModalOpenBtn = document.querySelector('#sortby-modal-open-btn')
const sortbyModalCloseBtn = document.querySelector('#sortby-modal-close-btn')
const sortbyModalMenu = document.querySelector('#sortby-modal-menu')
sortbyModalOpenBtn.addEventListener("click", () => {
  sortbyModalMenu.showModal()
})
sortbyModalCloseBtn.addEventListener("click", () => {
  sortbyModalMenu.close()
})

// HERO CAROUSEL
const heroCarousel = document.querySelector("#hero-carousel");
const heroPrevButton = document.querySelector("#hero-prev-button");
const heroNextButton = document.querySelector("#hero-next-button");
const heroCarouselItems = document.querySelectorAll(".hero-carousel-item");

let currentIndex = 0;
let itemWidth = heroCarouselItems[0].clientWidth;

const moveCarousel = () => {
  heroCarousel.style.transition = "transform 0.3s ease-in-out";
  heroCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

heroPrevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + heroCarouselItems.length) % heroCarouselItems.length;
  moveCarousel();
});

heroNextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % heroCarouselItems.length;
  moveCarousel();
});

const autoplay = () => {
  currentIndex = (currentIndex + 1) % heroCarouselItems.length;
  moveCarousel();
};

let autoplayInterval = setInterval(autoplay, 4000);

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
  autoplayInterval = null; // Menyimpan state interval sebagai null saat dihentikan
};

const startAutoplay = () => {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(autoplay, 4000);
  }
};

const resizeHandler = () => {
  itemWidth = heroCarouselItems[0].clientWidth;
  heroCarousel.style.transition = "none";
  heroCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
};

window.addEventListener("resize", resizeHandler);
