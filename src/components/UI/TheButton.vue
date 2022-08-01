<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.50rem 1rem;
  font-family: inherit;
  background-color: #00b8ff;
  border: 1px solid #3a0061;
  border-radius: 15px;
  color: black;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0654c8;
  border-color: #270041;
  box-shadow: 0  0 5px #00378a;
  color: white;
}

.flat {
  background-color: transparent;
  color: black;
  border: 1px solid #3a0061;
  margin: 5px;
}

.flat:hover,
.flat:active {
  background-color: #00b8ff;
  border: 1px solid #3a0061;
}
</style>
>
