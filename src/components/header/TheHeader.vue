<template>
  <header class="header1">
    <h1> {{ title2 }}</h1>
    <h3>{{ title3 }}</h3>
  </header>
  <header class="header2">
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: ['title2', 'title', 'title3']
}
</script>

<style scoped>
.header1 {
  width: 100%;
  height: 4rem;
  background-color: #0095eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header2 {
  width: 100%;
  height: 5rem;
  background-color:aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 2px 15px -9px rgba(0, 149, 235, 1);
}

header h1 {
  color:black;
  margin: 20px;
  text-shadow: 0px 4px 6px rgba(255, 255, 255, 1);
  cursor: pointer;
  
}

header h2 {
  color: black;
  margin: 1px;
  text-shadow: 0px 1px 9px rgb(0, 149, 235);
  cursor: pointer;
}

header h3 {
 margin: 20px;
 cursor: pointer;
}
</style>