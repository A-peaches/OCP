<template>
  <div class="home">
    <img src="@/assets/bg_test.jpg" alt="Coffee Shop" class="main-image">
    <h1>Welcome to Our Coffee Shop!</h1>
    <p>Explore our world-class coffee blends and brews.</p>
  </div>
</template>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
}
</style>