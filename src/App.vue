<template>
  <div class="header">
    <Logo/>
  </div>
  <div class="body">
    <router-view/>
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

<style lang="scss" scoped>
.header {
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $boxColor;
  border-bottom: 0.1vh solid $borderColor;
}
.body {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1vh;
}
.footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 5vh;
  border-top: 0.1vh solid $borderColor;
  color: $textColor;
  background-color: $boxColor;
}
</style>
