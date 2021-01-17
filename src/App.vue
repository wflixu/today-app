<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {};
  },
  created(){
    this.$router.push('./login');
  }
};
</script>

<style>
html,body {
   padding:0;
   margin:0;
   height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  padding:1px;
  box-sizing: border-box;
}

</style>
