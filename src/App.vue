<template>
  <app-main></app-main>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import main from './pages/main';

export default {
  name: 'App',
  components: {
    'app-main':main,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
