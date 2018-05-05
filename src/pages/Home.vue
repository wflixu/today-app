<template>
  <div class="home">
     <router-view></router-view>
    <mt-tabbar v-model="selected" @click="changetab" :fixed="true">
        <mt-tab-item id="home">
            <img slot="icon" src="../assets/home.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="explore" @click="changetab">
            <img slot="icon" src="../assets/explore.png">
            发现
        </mt-tab-item>
        <mt-tab-item id="my">
            <img slot="icon" src="../assets/user.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

import { Tabbar, TabItem } from 'mint-ui';

export default {
  name: 'Home',
  data() {
    return {
      selected: 'home',
      

    };
  },
  components: {
    'mt-tabbar': Tabbar,
    'mt-tab-item': TabItem
  },
  methods: {
    changetab() {
    }
  },
  watch: {
    selected: function (val, oldVal) {
     this.$router.push({path:'/'+val});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .home{
     height: 100%;
   }
</style>
