<script setup>
import {useRouletteStore} from "../store/roulette.js";
import {computed} from "vue";

const rouletteStore = useRouletteStore()
const categories = computed(() => { return rouletteStore.categories })
</script>

<template>
<div v-for="category in categories" :key="category" class="category-box">
  <div v-for="item in category.items" :key="item" class="item-box">
    <div class="item-header" :style="{color: category.color}">
      {{ category.name }}
    </div>
    <div class="item-body">
      <img :src="item.image" class="item-image">
    </div>
    <div class="item-footer">
      {{ item.name }}
    </div>
  </div>
</div>
</template>

<style scoped>

.category-box {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.item-box {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 8vw;
  height: 18vh;
  background-color: #d7d7d7;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.item-header {
  display: flex;
  padding: 1vmin;
  font-size: 2vmin;
  color: #775619;
  border-bottom: 1px solid gray;
  justify-content: center;
}

.item-body {
  width: 100%;
}

.item-image {
  width: 100%;
  height: 10vh;
  border-top: 1px solid gray;
}

.item-footer {
  border-top: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4vmin;
}




</style>


