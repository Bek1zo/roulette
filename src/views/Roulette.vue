<template>
<div class="container">
  <div class="roulette">
    <div class="roulette-header">
    </div>
    <div class="roulette-body">
      <div class="space"></div>
      <Item/>
      <div class="space"></div>
<!--      <div v-for="category in categories" :key="category" class="category">-->
<!--        <div v-for="item in category.items" :key="item" class="item">-->
<!--          <div class="item-header">-->
<!--            <h5 :style="{color: category.color}">{{ category.name }}</h5>-->
<!--          </div>-->
<!--          <div class="item-body">-->
<!--            <img :src="item.image" alt="" class="item-image">-->
<!--          </div>-->
<!--          <div class="item-name">-->
<!--            {{ item.name }}-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="roulette-footer">
<!--      <div class="roulette-button-run" @click="SpinRoulette">-->
<!--&lt;!&ndash;        Крутить&ndash;&gt;-->
<!--      </div>-->
    </div>

  </div>
  <h3>Список последних победителей</h3>
<!--  <div class="winners">-->
<!--    <div v-for="winner in users" :key="winner" class="last-winner">-->
<!--      <div>-->
<!--        <img :src="winner.avatar">-->
<!--      </div>-->
<!--      <div>-->
<!--        <span>{{ winner.name }}</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</div>
</template>

<script setup>
import {useRouletteStore} from "../store/roulette.js";
import {computed, onMounted, ref} from "vue";
import Item from "./Item.vue";

const rouletteStore = useRouletteStore()
const categories = computed(() => { return rouletteStore.categories })
const users = computed(() => { return rouletteStore.users })

onMounted(() => {
  SpinRoulette()
})

const SpinRoulette = () => {
  // const chance = Math.random(Math.floor(Math.random() * 100))
  const chance = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  const selectedCategory = categories.value.filter((category) => {
    category.chance > chance
  })
  console.log(selectedCategory)
}

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.roulette {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 23vh;
  gap: 10px;
}

.roulette-body {
  border: 2px solid #958f8f85;
  border-radius: 6%;
  display: flex;
  flex-direction: row;
  gap: 1vw;
  padding: 10px;
  width: 90%;
  height: 100%;
  font-size: 2vmin;
  flex-wrap: nowrap;
}

/* Категория перед предметом */

.category {
  display: flex;
  flex-direction: row;
  gap: 1vw;
}

/* Низ рулетки */

.roulette-footer {
  display: flex;
  justify-content: center;
  font-size: 3vmin;
}

/* Кнопка запуска рулетки */

.roulette-button-run {
  background-color: white;
  color: black;
  border: 2px solid #555555;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.roulette-button-run {
  transition-duration: 0.4s;
}

.roulette-button-run:hover {
  background-color: #555555;
  color: white;
}

/* ПОСЛЕДНИЕ ПОБЕДИТЕЛИ */

.winners {
  display: flex;
  gap: 10px;
  width: 90%;
  padding: 5px;
  justify-content: space-between;
}

.winners img {
  z-index: 1;
  border: 1px solid black;
}

.last-winner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-weight: bold;
  padding: 6px;
  border-radius: 0px 0px 10px 10px;
  will-change: transform;
  animation: linear-user 30s linear infinite;
  width: 14vmin;
  height: 15vmin;
}
/*
@keyframes linear-user {
  from { transform: translateX(100vw); }
  to { transform: translateX(-100vw); }
}

@keyframes linear-item {
  from { transform: translateX(100vw); }
  to { transform: translateX(-50vw); }
}
*/
</style>