<template>
  <div id="app">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  opacity: 0;
  animation: app-fade-in;
  animation-duration: 250ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;

  @keyframes app-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
