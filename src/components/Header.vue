<template>
  <header class="header">
    <div class="top-bar">
      <div class="icons">
        <span class="menu-icon" @click="toggleMenu"><i class="fas fa-bars"></i></span>
      </div>
      <div class="logo">
        <span>CHANEL</span>
      </div>
      <div class="icons">
        <span class="icon"><i class="fas fa-user"></i></span>
        <span class="icon"><i class="fas fa-shopping-bag"></i></span>
      </div>
    </div>
    <nav class="navbar" :class="{ 'nav-item--hidden': isNavItemHidden && !isMobile, 'active': isMenuOpen }">
      <ul class="nav-links">
        <li
          class="nav-item"
          @mouseover="activeDropdown = 'man'"
          @mouseleave="activeDropdown = null"
        >
          <a class="main-link" href="#">男性香氛</a>
          <div class="dropdown" v-if="activeDropdown === 'man' || isMobile">
            <ul>
              <li><a href="#">香奈兒藍色男性香氛系列</a></li>
              <li><a href="#">香奈兒藍色男性香氛系列</a></li>
            </ul>
          </div>
        </li>
        <li
          class="nav-item"
          @mouseover="activeDropdown = 'woman'"
          @mouseleave="activeDropdown = null"
        >
          <a class="main-link" href="#">女性香氛</a>
          <div class="dropdown" v-if="activeDropdown === 'woman' || isMobile">
            <ul>
              <li><a href="#">香奈兒藍色女性香氛系列</a></li>
              <li><a href="#">香奈兒藍色女性香氛系列</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const activeDropdown = ref(null);
const isMobile = ref(false);
const isNavItemHidden = ref(false);
let lastScrollY = window.scrollY;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (!isMobile.value && currentScrollY > lastScrollY && currentScrollY > 100) {
    isNavItemHidden.value = true;
  } else {
    isNavItemHidden.value = false;
  }
  lastScrollY = currentScrollY;
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  z-index: 1000;
  box-sizing: border-box;
}

.top-bar {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 83.875rem;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.icons {
  display: flex;
  gap: 15px;
}

.icon {
  font-size: 20px;
}

.menu-icon {
  font-size: 20px;
  display: none;
}

.navbar {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &.nav-item--hidden {
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  &.active {
    display: block;
  }
}

.nav-links {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  gap: 20px;

  a {
    color: #000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #000;
      transition: width 0.3s;
      margin-top: 5px;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.nav-item {
  position: relative;
  overflow: hidden;

  &:hover .dropdown {
    display: block;
  }
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;

  ul {
    width: max-content;
    list-style: none;
    padding: 10px;
    margin: 0;

    li {
      margin: 0;
      padding: 5px 10px;

      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .icons {
    display: flex;
    gap: 10px;
  }

  .top-bar {
    justify-content: space-between;
  }

  .logo {
    font-size: 20px;
  }

  .navbar {
    display: none;
    flex-direction: column;
    align-items: center;

    &.active {
      display: flex;
    }
  }

  .nav-links {
    flex-direction: column;
    align-items: center;

    .nav-item {
      width: 100%;
      text-align: center;
      .main-link:hover::after {
        background: none;
        transition: unset;
      }
    }
  }

  .dropdown {
    position: relative;
    box-shadow: none;
    display: block;

    ul {
      padding: 0;

      li {
        padding: 10px;

        a {
          display: block;
        }
      }
    }
  }

  .nav-item:hover .dropdown {
    display: block;
  }
}
</style>
