<template>
  <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
  <div class="logo">
    <h1>
      <em>R</em>
      <em>O</em>
      <em>U</em>
      <em>L</em>
      <em>E</em>
      <em>T</em>
      <em>T</em>
      <em>E</em>
    </h1>
  </div>
</template>

<script setup>

</script>


<style scoped>

h1 {
  margin: 0;
  height: 12vmin;
  width: 120vmin;
  display: flex;
  justify-content: center;
  position: relative;
}

h1::before {
  content: "";
  display: block;
  position: absolute;
  width: 18vmin;
  height: 18vmin;
  border-radius: 50%;
  border: 1.3vmin solid currentColor;
  box-sizing: border-box;
}

em {
  font-family: 'Josefin Sans', sans-serif;
  color: currentColor;
  font-size: 4.5vmin;
  position: relative;
  font-style: normal;
  width: 4.2vmin;
  margin-top: 6%;
  text-align: center;
}

</style>