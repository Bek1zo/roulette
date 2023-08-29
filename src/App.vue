<template>
  <div class="header">
    <Logo/>
  </div>
  <div class="body">
    <Roulette/>
  </div>
  <div class="footer">
    <Footer/>
  </div>
</template>

<script setup>
import Roulette from "./views/Roulette.vue";
import Logo from "./components/Logo.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.header {
  height: 20vh;
  display: flex;
  justify-content: center;
}
.body {
  height: 75vh;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  border-top: 2px solid black;
}
</style>
