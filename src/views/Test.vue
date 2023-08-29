<template>
  <div class="container">
    <div class="roulette-box">
      <div class="roulette-item">
        <div class="roulette-header">
          item-header
        </div>
        <div class="roulette-body">
            item-body
        </div>
        <div class="roulette-footer">
          item-footer
        </div>
      </div>
    </div>
    <div class="winner-box">
      <div class="winner-item">
        <div class="winner-header">
          <h5>Последние победители</h5>
        </div>
        <div class="winner-body">
          <div class="winner-item">
            <div class="winner-item-header">
              item-name
            </div>
            <div class="winner-item-body">
              item-body
            </div>
            <div class="winner-item-footer">
              item-footer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.container {
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.roulette-box {
  background-color: $boxColor;
  border: 0.1vh solid $borderColor;
  border-radius: 1vh;
  height: 40%;
}

.winner-box {
  background-color: $boxColor;
  border: 0.1vh solid $borderColor;
  border-radius: 1vh;
}
</style>