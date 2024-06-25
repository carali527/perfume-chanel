<template>
  <div>
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
    <button v-if="showBackToTop" class="back-to-top" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const activeDropdown = ref(null);
const isMobile = ref(false);
const isNavItemHidden = ref(false);
const showBackToTop = ref(false);
let lastScrollY = window.scrollY;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  showBackToTop.value = currentScrollY > 200; // 顯示按鈕的滾動距離閾值
  if (!isMobile.value && currentScrollY > lastScrollY && currentScrollY > 100) {
    isNavItemHidden.value = true;
  } else {
    isNavItemHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style lang="scss" scoped>
.content {
  padding-top: 100px;
}
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.3s;
  opacity: 0.5;
  padding: 12px;
  border: 1px solid #ffffff;
  &:hover {
    opacity: 1;
  }
}
</style>
