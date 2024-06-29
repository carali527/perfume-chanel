<template>
  <div class="product-detail">
    <div class="swiper-container">
      <swiper v-bind="swiperOptions" class="swiper">
        <swiper-slide v-for="image in images" :key="image">
          <img :src="image" alt="Perfume Image" />
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>編號 {{ product.code }}</p>
      <p class="price">NT$ {{ product.price }}</p>
      <div class="options">
        <p>2 款可選大小</p>
        <p>{{ product.size }}</p>
      </div>
      <button class="add-to-cart">新增到購物車</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

const images = ref([
  'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg',
  'https://www.chanel.com/images//t_one/t_fnbedito//q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1240/comete-les-exclusifs-de-chanel-eau-de-parfum-spray-6-8fl-oz--packshot-alternative-v1-122560-9539823861790.jpg'
]);

const product = ref({
  name: '香奈兒嘉柏麗香水',
  description: '香奈兒嘉柏麗隨機噴香霧',
  code: '105530',
  price: '6,850',
  size: '100 ml'
});

const swiperOptions = {
  autoplay: {
    delay: 5000
  },
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 28,
  breakpoints: {
    slidesPerView: 4,
    slidesOffsetBefore: 45,
    slidesOffsetAfter: 45,
    spaceBetween: 0
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  modules: [Navigation, Pagination]
};
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: space-between;
}

.swiper-container {
  width: 50%;
}

.product-info {
  width: 45%;
}

.price {
  font-size: 24px;
}

.add-to-cart {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
