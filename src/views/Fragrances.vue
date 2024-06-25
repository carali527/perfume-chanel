<template>
    <div class="product-grid">
      <ul class="product-categories">
        <li class="category" v-for="category in categories" :key="category.name">
            <button>
                <img :src="category.image" :alt="category.name">
                <p>{{ category.name }}</p>
            </button>
        </li>
      </ul>
      <div class="product-list">
        <div class="product-item" v-for="product in products" :key="product.id">
          <a href="">
            <img :src="product.image" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </a>
          <p>{{ product.price }}</p>
          <button class="add-to-bag" @click="addToCart(product.id)">
            <span>新增到購物車</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref([
    { name: '香水', image: 'https://www.chanel.com/apac/img/prd-emea/sys-master/content/P1/h4b/h2b/9794397339678' },
    { name: '隨機噴香霧', image: 'https://www.chanel.com/apac/img/prd-emea/sys-master/content/P1/h4b/h2b/9794397339678' },
    { name: '沐浴和身體保養', image: 'https://www.chanel.com/apac/img/prd-emea/sys-master/content/P1/h4b/h2b/9794397339678' }
  ]);
  
  const products = ref([
    {
      id: 1,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗隨機噴香霧',
      price: 'NT$ 2,230',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    },
    {
      id: 2,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗流金隨身香水',
      price: 'NT$ 5,700',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    },
    {
      id: 3,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗流金香水',
      price: 'NT$ 4,800 起',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    },
    {
      id: 3,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗流金香水',
      price: 'NT$ 4,800 起',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    },
    {
      id: 3,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗流金香水',
      price: 'NT$ 4,800 起',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    },
    {
      id: 3,
      name: '香奈兒嘉柏麗香水',
      description: '香奈兒嘉柏麗流金香水',
      price: 'NT$ 4,800 起',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/gabrielle-chanel-hair-mist-1-35fl-oz--packshot-default-120870-9545536995358.jpg'
    }
  ]);
  
  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };
  </script>
  
<style lang="scss" scoped>
.product-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.product-categories {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.category {
  text-align: center;
  flex: 1;
  button:hover {
    p {
        font-weight: 400;
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  p {
    font-weight: 300;
  }
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.product-item {
  text-align: center;
  max-width: 200px;
  flex: 1 1 calc(33.333% - 40px);
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
  }
  a:hover {
    img {
        border-bottom: 1px solid #000;
    }
  }
}

button.add-to-bag {
  margin-top: 10px;
  &:hover {
    span::after {
      animation: fadeIn .5s ease-out forwards;
      border-bottom: 2px solid #000000;
      filter: blur(0);
      opacity: 1;
      transform: scaleX(1);
      transition: all .5s ease-out;
    }
  }
  span {
    position: relative;
    &::after {
      bottom: 0;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      top: calc(100% + 5px);
      transform: scaleX(.98);
      transition: all .5s ease-out;
      width: 100%;
      border-bottom: 2px solid #ececec;
      height: auto;
    }
  }
}

@media (max-width: 768px) {
  .product-item {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .product-item {
    flex: 1 1 100%;
  }
}
</style>
