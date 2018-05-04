<template>
  <div class="home_content">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
     <div>
     </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';

export default {
  name: 'home-content',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {
    'mt-header': Header,
    'mt-button': Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
