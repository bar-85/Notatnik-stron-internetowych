<template>
  <ul>
    <main-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></main-resource>
  </ul>
</template>

<script>
import MainResource from './MainResource.vue'

export default {
  inject: ['resources'],
  components: {
    MainResource
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>