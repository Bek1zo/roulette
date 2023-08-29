<template>
<div class="container">
  <div class="roulette">
    <div class="roulette-header">
    </div>
    <div class="roulette-body">
      <div v-for="category in categories" :key="category" class="category">
        <div v-for="item in category.items" :key="item" class="item">
          <h5 :style="{color: category.color}">{{ category.name }}</h5>
          <span class="item-name">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="roulette-footer">
      <div class="roulette-button-run">
        Крутить
      </div>
    </div>

  </div>
  <div class="winners">
    <div v-for="winner in users" :key="winner" class="last-winner">
      <div>
        <img src="../assets/images/avatar/dog.jpg" alt="">
      </div>
      <div>
        <span>{{ winner.name }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {useRouletteStore} from "../store/roulette.js";
import {computed, ref} from "vue";

const rouletteStore = useRouletteStore()
const categories = computed(() => { return rouletteStore.categories })
const users = computed(() => { return rouletteStore.users })

const showMaxWinners = ref(3)



</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roulette {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.roulette-body {
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  gap: 1vw;
  padding: 10px;
  width: 90%;
}

.category {
  display: flex;
  flex-direction: row;
  gap: 1vw;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border: 1px solid red;
  border-radius: 10px;
  width: 20vmin;
}

.item-name {
  font-size: 1.8vmin;
}

.roulette-body {
  font-size: 2vmin;
}

.roulette-footer {
  display: flex;
  justify-content: center;
  font-size: 3vmin;
}

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
  border-radius: 0px 0px 10px 10px;
}

</style>