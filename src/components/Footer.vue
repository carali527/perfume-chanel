<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>瀏覽 CHANEL.COM</h4>
        <ul>
          <li><a href="#">男性香氛</a></li>
          <li><a href="#">女性香氛</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>線上服務</h4>
        <ul>
          <li><a href="#">我的帳戶</a></li>
          <li><a href="#">常見問題</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>香奈兒品牌</h4>
        <ul>
          <li><a href="#">法律聲明</a></li>
          <li><a href="#">隱私政策</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="location-language">
        <p>台灣地區 - 繁體中文(台灣)</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  z-index: 999;
  background: #000;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border-top: solid .5px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 10px;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #555;
  flex-wrap: wrap;
}

.accessibility-toggle {
  display: flex;
  align-items: center;
}

.accessibility-toggle label {
  margin-right: 10px;
}

.location-language {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  color: #fff;
  font-size: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
  }
}
</style>
