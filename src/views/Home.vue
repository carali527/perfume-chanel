<template>
  <Particlesa />
  <section class="section background-img img-1" v-bg-parallax="[25, 75]">
    <p class="section__title section__title--authored">香奈兒</p>
  </section>
  <section class="section">
    <p class="section__title">Chanel Fragrance, Elevate Your Elegance</p>
  </section>
  <section class="section background-img img-2" v-bg-parallax="[45, 100]">
    <p class="section__title section__title--authored">香奈兒CHANCE粉紅甜蜜系列</p>
  </section>
  <section class="section background-img img-3" v-bg-parallax="[45, 100]">
    <p class="section__title section__title--authored">香奈兒N°5系列</p>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, getCurrentInstance } from 'vue';
import Particlesa from '../components/Particles.vue';

const requestAnimFrame = window.requestAnimationFrame;

const globals = {
  latestScrollY: 0
};

function bind(el, binding) {
  if (!window._parallax) {
    window._parallax = {
      targets: [],
      callback: requestUpdate,
      animate: true
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate);
    window.addEventListener("resize", forceUpdate);
  }

  const targets = window._parallax.targets;
  window._parallax.targets = targets.concat(el);

  el._parallax = applyParallax;
  el._bounds = binding.value || [0, 100];
  forceUpdate();
}

function forceUpdate() {
  requestUpdate(true);
}

function unbind(el) {
  const { targets } = window._parallax;

  const index = targets.indexOf(el);
  if (index === -1) return;
  targets.splice(index, 1);

  delete el._parallax;

  if (targets.length === 0) {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", forceUpdate);
    delete window._parallax;
  } else {
    requestUpdate(true);
  }
}

function requestUpdate(strict = false) {
  if (!window._parallax) return;

  if (globals.latestScrollY !== window.pageYOffset || strict) {
    if (!window._parallax.animate) return;
    window._parallax.animate = false;

    globals.latestScrollY = window.pageYOffset;
    
    const body = document.body,
      html = document.documentElement,
      scrollPos = window.pageYOffset || document.documentElement.scrollTop,
      screenHeight = window.innerHeight,
      windowHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

    const targets = window._parallax.targets;
    requestAnimFrame(function() {
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        target._parallax(windowHeight, screenHeight, scrollPos);
      }
      window._parallax.animate = true;
    });
  }
}

function applyParallax(windowHeight, screenHeight, scrollPos) {
  const el = this;
  const elFromTop = el.getBoundingClientRect().top + window.pageYOffset;
  const elHeight = el.offsetHeight;
  const minAvaliable = el._bounds[0];
  const maxAvaliable = el._bounds[1];

  // 計算元素中間的位置
  const elMiddle = elFromTop + elHeight / 2;

  // 計算螢幕中間的位置
  const screenMiddle = scrollPos + screenHeight / 2;

  // 計算元素中間與螢幕中間的距離
  const distanceFromMiddle = screenMiddle - elMiddle;

  // 計算背景位置的百分比
  const percentagePos = maxAvaliable - (distanceFromMiddle / screenHeight) * (maxAvaliable - minAvaliable);
  // 限制百分比在 minAvaliable 到 maxAvaliable 之間
  const clampedPercentagePos = Math.min(Math.max(percentagePos, minAvaliable), maxAvaliable);

  el.style.backgroundPositionY = `${clampedPercentagePos}%`;
}

function update(el, binding) {
  el._bounds = binding.value || [0, 100];
}

// 定義自定義指令 bgParallax
const bgParallaxDirective = {
  mounted: bind,
  updated: update,
  unmounted: unbind
};

// 獲取當前組件實例並註冊指令
const instance = getCurrentInstance();
instance.appContext.app.directive('bg-parallax', bgParallaxDirective);

onMounted(() => {
  if (typeof window._parallax === 'undefined') {
    window._parallax = {
      targets: [],
      callback: requestUpdate,
      animate: true
    };
  }
  forceUpdate();
});

onUnmounted(() => {
  window.removeEventListener('scroll', requestUpdate);
  window.removeEventListener('resize', forceUpdate);
});
</script>

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section__title {
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 900;
}

.section__title--authored::before {
  display: block;
  font-size: 18px;
  content: 'perfume';
}

.background-img {
  background-repeat: no-repeat;
}

.content > .background-img:first-of-type {
  background-position: center;
  p {
    color: #ffff;
  }
}
.img-1 {
  color: #ffff;
  background-image: url('https://www.chanel.com/puls-img/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1717505333162-onehpcorpoprelaunchslidingherodesktop2880x1260pxeditajpg_1260x2880.jpg');
}

.img-2 {
  color: #000;
  aspect-ratio: 3.2;
  background-image: url('https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1702486160532-oneplpmajorpushdesktop2880x900pxjpg.jpg');
}

.img-3 {
  color: #000;
  background-image: url('https://puls-img.chanel.com/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1718096466120-onelandingpagemajorpushdesktop2880x900pxkimjpg_1800x5760.jpg');
}

@media (max-width: 1200px) {
  .background-img {
    background-position: center;
  }
  .section__title {
    font-size: 20px;
  }
  .section__title--authored::before {
    font-size: 16px;
  }
}
</style>
