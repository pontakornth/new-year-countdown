<template>
  <div class="bg-blue-900 text-gray-100 h-screen flex justify-center items-center" id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Chonburi|K2D&display=swap');
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


@tailwind components;
@tailwind utilities;

</style>
