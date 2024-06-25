<template>
  <div>
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.content {
  padding-top: 100px;
}

@media (max-width: 768px) {
  .content {
    padding-top: 70px;
  }
}
</style>
