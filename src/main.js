import { createApp } from 'vue';

import App from './App.vue';
import TheCard from './components/UI/TheCard.vue';
import TheButton from './components/UI/TheButton.vue';
import TheDialog from './components/UI/TheDialog.vue'

const app = createApp(App)

app.component('the-card', TheCard);
app.component('the-button', TheButton);
app.component('the-dialog', TheDialog);

app.mount('#app');
