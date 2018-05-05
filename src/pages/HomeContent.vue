<template>
  <div class="home_content">
    <mt-header title="首页">
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
     <div>
        <input type="button" value="增加" @click="increment">
       <input type="button" value="减少" @click="decrement">
        <input type="button" value="异步" @click="asyn">
    <div>
      目前的数字是:{{count}}
    </div>
     </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'home-content',
  components:{
   'mt-header':Header,
   'mt-button':Button
  },
  computed:mapGetters(['count']),
  methods:mapActions(['increment','decrement','asyn'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
