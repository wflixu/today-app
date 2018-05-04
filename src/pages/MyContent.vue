<template>
    <div class="my_content">
    <mt-header title="我的">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
     <div>
         <h2>我的</h2>
     </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';

export default {
  data() {
    return {};
  },
  components: {
    'mt-header': Header,
    'mt-button': Button
  }
};
</script>
<style scoped>

</style>

