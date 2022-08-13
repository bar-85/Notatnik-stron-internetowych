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
  border: 1px solid #00b8ff;
  border-radius: 7px;
  color: black;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #009ad6;
  border: 1px solid #00b8ff;
  box-shadow: 0  0 2px #00b8ff;
  color: white;
}
.flat {
  background-color: transparent;
  color: black;
  border: 1px solid #00b8ff;
  margin: 5px;
}

</style>

