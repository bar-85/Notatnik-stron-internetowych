<template>
  <li>
    <the-card>
      <header>
        <h3>{{ title }}</h3>
        <the-button mode="flat" @click="deleteResource(id)">Usuń</the-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">➡️ Wyświetl stronę ⬅️</a>
      </nav>
    </the-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #0ea6e2;
}

a:hover,
a:active {
  color: #1ebbff;
}
</style>