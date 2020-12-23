<template>
  <div class="app" id="app">
    <Counter msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from './components/Counter.vue';

@Component({
  components: {
    Counter,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|K2D&display=swap');
@tailwind base;

h2,h2,h3,h4,h5,h6 {
  @apply font-bold font-display;
}

h1 {
  @apply text-3xl font-bold;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}

html, body, * {
  box-sizing: border-box;
}

.app {
  @apply text-gray-100 h-screen flex justify-center items-center;
  background: url("./assets/background.jpg");
  background-position: center;
}


@tailwind components;
@tailwind utilities;

</style>
