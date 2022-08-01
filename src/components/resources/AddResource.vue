<template>
  <the-dialog v-if="inputIsInvalid" title="Niepoprawne dane" @close="confirmError">
    <template #default>
      <p>Wprowadź poprawne dane!</p> 
      <p>Sprawdź poprawność wprowadzonych danych.</p> </template>
      <template #actions>
        <the-button @click="confirmError">OK</the-button>
      </template>
  </the-dialog>
  <the-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Tytuł</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Opis</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <the-button type="submit">Dodaj stronę</the-button>
      </div>
    </form>
  </the-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #00b8ff;
  background-color: #d7f4ff;
}
.form-control {
  margin: 1rem 0;
}
</style>
