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


<style lang="scss" scoped>

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}


h1 {
  margin: 0;
  height: 14vmin;
  width: 120vmin;
  display: flex;
  justify-content: center;
  position: relative;
}

h1::before {
  content: "";
  display: block;
  position: absolute;
  width: 14vmin;
  height: 14vmin;
  border-radius: 50%;
  border: 1.3vmin solid $textColor;
  box-sizing: border-box;
}

em {
  font-family: 'Josefin Sans', sans-serif;
  color: $textColor;
  font-size: 3.5vmin;
  position: relative;
  font-style: normal;
  width: 6vmin;
  margin-top: 4.5%;
  text-align: center;
}

</style>