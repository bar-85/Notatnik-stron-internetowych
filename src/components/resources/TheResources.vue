<template>
  <the-card>
    <the-button @click="setSelectedTab('stored-resources')" :mode="storedButton"
      >Zapisane strony</the-button>
    <the-button @click="setSelectedTab('add-resource')" :mode="addButton"
      >Dodaj stronę</the-button>
  </the-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'GitHub',
          title: 'GitHub',
          description: 'Moja strona na GitHub',
          link: 'https://github.com/bar-85',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResources,
    };
  },
  computed: {
    storedButton() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addButton() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResources(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
